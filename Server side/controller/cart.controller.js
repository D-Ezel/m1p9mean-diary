import createHttpError from "http-errors";
import { CartClass } from "../class/CartClass.js";
import DishesModel from "../models/dishes.js";

const add = (dishId, req, next) => {
	DishesModel
	.findById(dishId)
	.populate([
		{
			path:"restoref",
			model:"Resto",
			select:"-dishes",
			populate: {
				path:"type",
				model:"TypeResto"
			}
		}
	])
	.exec((err, dish) => {
		console.log(dish);
		if (err) return next(err);
		if(!dish) return next(new Error("plat n'est plus disponible"));
		let cartOldToUpdate = new CartClass(req.session.cart ? req.session.cart : {});
		cartOldToUpdate.add(dish, dish.id);
		req.session.cart = cartOldToUpdate;
		console.log(req.session.cart);
		next(null, req.session.cart);
	})
}

const drop = (dishId, req, next) => {
	let cartOldToUpdate = new CartClass(req.session.cart);
	cartOldToUpdate.drop(dishId);
	req.session.cart = cartOldToUpdate;
	console.log(req.session.cart);
	next(null, req.session.cart);
}

export {
	add,
	drop
}