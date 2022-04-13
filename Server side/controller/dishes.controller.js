import createHttpError from "http-errors";
import DishesModel from "../models/dishes.js";

const getDishesByResto = (restoId, next) => {
	DishesModel
	.find({restoref: restoId})
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
		next(null, dish);
	})
}

export {
	getDishesByResto
}