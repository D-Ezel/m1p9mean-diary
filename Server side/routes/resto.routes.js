import express from "express";
import restoModel from "../models/resto.js";
const app = express();

app.get("/", (req,res, next) => {
	restoModel
	.find({})
		.populate("type")
		.populate("dishes", "-restoref")
			.exec((err, resto) => {
				if (err) return next(err);
				res.status(200).json(resto);
			})
})

export default app;
