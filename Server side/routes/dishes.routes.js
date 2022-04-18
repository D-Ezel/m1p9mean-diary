import express from "express";
import dishesModel from "../models/dishes.js";
import {getDishesByResto, searchByTypeDish} from "../controller/dishes.controller.js";
const app = express();

app.get("/restoref/:idRestoRef", (req, res, next) => {
	const restoId = req.params.idRestoRef;
	getDishesByResto(restoId, (err, dishes) => {
		if(err) return next(err);
		res.status(200).json(dishes);
	})
})

app.get("/searchByTypeRef/:typeDishId/:restoRef", (req, res, next) => {
	searchByTypeDish(req, (err,dishes) => {
		if(err) return next(err);
		res.status(200).json(dishes);
	})
})

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
