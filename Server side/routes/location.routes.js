import express from "express";
import locationModel from "../models/location.js";
const app = express();

app.get("/", (req,res, next) => {
	locationModel
	.find({})
		.populate("cityref")
		.exec((err, location) => {
			if (err) return next(err);
			res.status(200).json(location);
		})
	})

export default app;
