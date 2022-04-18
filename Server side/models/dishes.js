import mongoose from "mongoose";
import "./resto.js";
import "./type_resto.js"
const DishesSchema = new mongoose.Schema({
	name: {
		type: String
	},
	description: {
		type: String
	},
	restoref: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Resto',
    required: true
	},
	price: {
		type: Number,
		required:true
	},
	state: {
		type:Number,
		default: 1
	},
	typeref: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'TypeResto',
	}
});
  
const Dishes = mongoose.model("Dishes", DishesSchema);

export default Dishes;