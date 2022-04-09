import express from "express";
import cityModel from "../models/city.js";
const app = express();

app.get("/", (req,res, next) => {
	cityModel
	.find({})
		.populate("locations", "-cityref")
		.exec((err, cityModel) => {
			if (err) return next(err);
			res.status(200).json(cityModel);
		})
	})

export default app;
