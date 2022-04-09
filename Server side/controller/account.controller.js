import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
import AccountModel from "../models/accounts.js";
import dotenv from "dotenv";
dotenv.config();
const { SALT_WORK_FACTOR } = process.env;

const hashPassword = (password, callback) => {
	if (!password)
		return callback(new createHttpError.BadRequest("Valeur manquante"));

	bcrypt.genSalt(SALT_WORK_FACTOR || 10, function (saltError, salt) {
		if (saltError) {
			callback(saltError);
		} else {
			try {
				bcrypt.hash(password, salt, callback);
			} catch (error) {
				callback(error);
			}
		}
	});
};

const hashAndUpdateAllPassword = async (fn) => {
  const session = await AccountModel.startSession();

  await session.withTransaction(async () => {
    const accounts = await AccountModel.find();

    accounts.forEach((row) => {
      hashPassword(row.password, async function (hashError, hash) {
        if (hashError) {
          // throw hashError;
          fn({ error: hashError });
        } else {
          // console.log({ id: row._id, hash });
          await AccountModel.updateOne({ _id: row._id }, { password: hash });
          // fn(new Error("error on hash process"));
        }
      });
		});
	});

  session.endSession();
};

const generateToken = ({ _id, email, profile }) => {
  return jwt.sign({ _id, email, profile }, process.env.TOKEN_SECRET, {
    expiresIn: "2h",
  });
};

const login = ({ email, password }, next) => {
  if (!email || !password)
    return next(
      new createHttpError.BadRequest(
        "email ou mot de passe non vide"
      )
    );

	AccountModel.findOne()
    .or([{ email: login }])
    .populate("profile")
    .exec((error, account) => {
      if (error) return next(error);
      if (!account) return next(new Error("Erreur de connexion: Utilisateur non trouvé"));

      account.comparePassword(password, function (error, match) {
        if (error) return next(error);
        if (!match)
          return next(
            new Error("Erreur de connexion: email ou le mot de passe est erroné")
          );

        const token = generateToken(account);
        account.token = token;
        next(null, account);
      });
    });
};

const register = (accountInfo, next) => {
  AccountModel.startSession()
    .then(async (session) => {
      const account = new AccountModel(accountInfo);
      let savedAccount = account;
      await session.withTransaction(async () => {
        await account.save((error, newaccount) => {
          if (error) return next(error);
          savedAccount = newaccount;
        });
      });

      session.endSession();
      return Promise.resolve(savedAccount);
    })
    .then((newaccountSaved) => {
      console.log(newaccountSaved)
      AccountModel.findOne({ email: newaccountSaved.email })
      .populate("profile")
      .exec((err, accountfound) => {
        if(err) return next(err);
        if (!accountfound) return next(new Error("Erreur lors de la connexion apres enregistrement"));

        const token = generateToken(accountfound);
        accountfound.token = token;
        next(null, accountfound);
      });
		});
};

export {
	hashPassword, 
	hashAndUpdateAllPassword, 
	login,
	register
}