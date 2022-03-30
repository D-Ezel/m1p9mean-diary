import express from "express";
import customersModel from "./models.js";
const app = express();

app.get("/api/listingsAndReviews", async (req, res) => {
	const customers = await customersModel.find({});
	try {
		res.status(200).json(customers);
	} catch (error) {
		res.status(500).send(customers);
	}
				
});


export default app;