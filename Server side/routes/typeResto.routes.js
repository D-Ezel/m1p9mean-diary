import express from "express";
import typeRestoModel from "../models/type_resto.js";
const app = express();

app.get("/", (req,res, next) => {
	typeRestoModel
	.find({})
	.exec((err, typeResto) => {
		if (err) return next(err);
			res.status(200).json(typeResto);
	})
})

export default app;
