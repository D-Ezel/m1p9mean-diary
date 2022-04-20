import express from "express";
import profileModel from "../models/profile.js";
import { hashAndUpdateAllPassword,
  login,
  hashPassword,
  register} from "../controller/account.controller.js"
import {verifyToken} from "../middlewares/auth.js"

const app = express();

app.get("/profile", async (req,res) => {
	const profile = await profileModel.find({});
	try {
		console.log("profile")
		res.status(200).json(profile);
	} catch (error) {
		res.status(500).send(profile);
	}
})

app.post("/register", function (req,res, next) {
	register(req.body, (error, account) => {
    if (error) return next(error);

    res.json(account);
  });
})

app.get("/isLogged", verifyToken, function (req,res, next) {
  //if(!req.session.cart) console.log(req.session.cart);
  res.json(req.session.cart);
});


app.post("/login", function (req,res, next) {
	login(req.body, (error, account) => {
    if (error) return next(error);

    res.json(account);
  });
})

export default app;
