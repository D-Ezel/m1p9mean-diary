import express from "express";
import restoModel from "../models/resto.js";
import { searchResto, findByIdResto, findResto } from "../controller/resto.controller.js"
const app = express();


app.get("/popular", (req,res, next) => {
	restoModel
	.find({state: 2})
		.populate("type")
		.populate("dishes", "-restoref")
		.exec((err, resto) => {
			if (err) return next(err);
				res.status(200).json(resto);
			})
})

app.get("/others/:typeRestoId/:minimumPrice/:searchInput?", (req,res, next) => {
	searchResto(req, (err, resto) => {
		if(err) next(err);
			res.status(200).json(resto);
	})
})

app.get("/:restoId?", (req,res, next) => {
	const restoId = req.params.restoId;
	if(restoId) {
		findByIdResto(restoId, (err, resto) => {
			if(err) next(err);
			res.status(200).json(resto);
		})
	} else {
		findResto((err, resto) => {
			if(err) next(err);
			res.status(200).json(resto);
		})
	}
})
	
export default app;
