import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { SALT_WORK_FACTOR } = process.env;

const AccountsSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Veuillez remplir le champ prenom"],
  },
  last_name: {
    type: String,
    required: [true, "Veuillez remplir le champ nom"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "L'adresse mail existe déjà"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "L'adresse mail n'est pas valide",
    ],
  },
  birth_date: {
    type: Date,
    required: [true, "Veuillez entre votre date de naissance"],
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile',
    required: true,
  },
	password: {
    type: String,
    required: [true, "Veuillez entrer votre mot de passe"]
  },
  token: {
    type:String
  },
  created_at: {
    type: Date,
    default: new Date(),
  }  
});

AccountsSchema.pre("save", function (next) {
  const account = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(SALT_WORK_FACTOR || 10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(account.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          account.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});


const Account = mongoose.model("accounts", AccountsSchema);

export default Account;