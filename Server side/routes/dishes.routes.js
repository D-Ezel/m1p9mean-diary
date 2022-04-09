import express from "express";
import dishesModel from "../models/dishes.js";
const app = express();

app.get("/", (req,res, next) => {
	dishesModel
	.find({})
		.populate("restoref","-dishes")
			.exec((err, dishes) => {
				if (err) return next(err);
				res.status(200).json(dishes);
			})
})

export default app;
