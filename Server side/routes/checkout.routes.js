import express from "express";
import { checkoutMap } from "../controller/checkout.controller.js"
const app = express();

app.post("/map", (req,res, next) => {
    checkoutMap(req, (err, orderedInserted) => {
			if(err) next(err);
			res.status(200).json(orderedInserted);
		})
})

export default app;
