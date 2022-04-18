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
 const searchByTypeDish = (req, next) => {
	let typeDishId = req.params.typeDishId
	let restoRef = req.params.restoRef
	if(typeDishId != "best") {
		DishesModel
		.find({})
		.populate([{
			path:"typeref",
			model:"TypeResto",
			match: {
				_id: typeDishId
			}
		}])
		.populate([{
			path:"restoref",
			model:"Resto",
			match: {
				_id:restoRef
			}
		}])
		.exec((err, dish) => {
			console.log(dish)
			if (err) return next(err);
			const lengthDish = Object.keys(dish).length
			let dishType = [];
			for(let i=0; i<lengthDish; i++) {
				if(dish[i].typeref != null && dish[i].restoref != null) {
					dishType.push(dish[i]);
				}
			}
			if(dishType.length == 0) return next(null, []);
			next(null, dishType);
		})
	} else {
		DishesModel
		.find({state: 2})
		.populate("typeref")
		.populate([{
			path:"restoref",
			model:"Resto",
			match: {
				_id:restoRef
			}
		}])
		.exec((err, dish) => {
			console.log(dish)
			if (err) return next(err);
			const lengthDish = Object.keys(dish).length
			let dishType = [];
			for(let i=0; i<lengthDish; i++) {
				if(dish[i].restoref != null) {
					dishType.push(dish[i]);
				}
			}
			if(dishType.length == 0) return next(null, []);
			next(null, dishType);
		})
	}
 }

export {
	getDishesByResto,
	searchByTypeDish
}