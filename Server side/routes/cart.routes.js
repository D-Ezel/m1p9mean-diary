import express from "express";
import { add, drop } from "../controller/cart.controller.js";
const app = express();

app.get("/", (req,res, next) => {
	const cart = req.session.cart
	res.status(200).json(cart)
})

app.get("/add/:id", (req, res, next) => {
	const dishId = req.params.id;
	add(dishId, req, (err, cart) => {
		if(err) next(err);
		res.status(200).json(cart);
	});
})

app.get("/drop/:id", (req, res, next) => {
	const dishId = req.params.id;
	drop(dishId, req, (err, cart) => {
		if(err) next(err);
		res.status(200).json(cart);
	})
})

export default app;
