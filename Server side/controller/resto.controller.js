import RestoModel from "../models/resto.js"


const findByIdResto = (id, next) => {
	RestoModel
	.find({_id: id})
		.populate("type")
		.populate("dishes", "-restoref")
			.exec((err, resto) => {
				if (err) return next(err);
				next(null, resto);
			})
}


const findResto = (next) => {
	RestoModel
	.find({})
		.populate("type")
		.populate("dishes", "-restoref")
			.exec((err, resto) => {
				if (err) return next(err);
				next(null, resto);
			})
}

const searchResto = (req, next) => {
    let typeRestoId = req.params.typeRestoId
    let minimumPrice = req.params.minimumPrice
    let searchInput = req.params.searchInput

    if(searchInput) {
			RestoModel
			.find({name: { $regex: new RegExp("^" + searchInput.toLowerCase(), "i") }})
			.populate("type")
			.populate("dishes")
			.exec((err, resto) => {
				console.log(resto)
				if (err) return next(err);
				next(null, resto);
			})
    } else if(minimumPrice > 0) {
			let minimum = Number(minimumPrice) + 1;
			console.log(minimum);
			if(typeRestoId != "all") {
				RestoModel
				.find()
				.populate([{
					path:"type",
					model:"TypeResto",
					match: {
						_id: typeRestoId
					}
				}])
				.populate([{
					path:"dishes", 
					model:"Dishes",
					match: {
						price: {$lt: minimum},
	
					},
					select:"-restoref"
				}])
				.exec((err, resto) => {
					console.log(resto)
					if (err) return next(err);
					const lengthResto = Object.keys(resto).length
					let restoTypeAndDishes = [];
					for(let i=0; i<lengthResto; i++) {
						if(resto[i].type.length > 0 && resto[i].dishes.length > 0) {
							restoTypeAndDishes.push(resto[i]);
						}
					}
					if(restoTypeAndDishes.length == 0) return next(null, []);
					next(null, restoTypeAndDishes);
				})
			} else {
				RestoModel
				.find()
				.populate("type")
				.populate([{
					path:"dishes", 
					model:"Dishes",
					match: {
						price: {$lt: minimum},
	
					},
					select:"-restoref"
				}])
				.exec((err, resto) => {
						console.log(resto)
						if (err) return next(err);
						const lengthResto = Object.keys(resto).length
						let restoMinimumRequire = [];
						for(let i=0; i<lengthResto; i++) {
							if(resto[i].dishes.length > 0) {
								restoMinimumRequire.push(resto[i]);
							}
						}
						if(restoMinimumRequire.length == 0) return next(null, []);
						next(null, restoMinimumRequire);
				})
			}
		} else if(typeRestoId != "all") {
			RestoModel
				.find({})
				.populate([{
					path:"type",
					model:"TypeResto",
					match: {
						_id: typeRestoId
					}
				}])
				.populate("dishes")
				.exec((err, resto) => {
					console.log(resto)
					if (err) return next(err);
					const lengthResto = Object.keys(resto).length
					let restoType = [];
					for(let i=0; i<lengthResto; i++) {
						if(resto[i].type.length > 0) {
							restoType.push(resto[i]);
						}
					}
					if(restoType.length == 0) return next(null, []);
					next(null, restoType);
				})
		} else {
			RestoModel
			.find()
			.populate("type")
			.populate("dishes")
			.exec((err, resto) => {
				if (err) return next(err);
				next(null, resto);
			})
		}
}

export {
    searchResto,
		findByIdResto,
		findResto
}