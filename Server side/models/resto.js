import mongoose from "mongoose";
import "./type_resto.js";
import "./dishes.js";
const RestoSchema = new mongoose.Schema({
	name: {
		type: String
	},
	type: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'TypeResto',
    required: true
	}],
	coordinate: {
		type: mongoose.Schema.Types.Object,
		required:true
	},
	dishes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Dishes',
    required: true
	}],
	state: [{
		type: Number,
		default: 1
	}]
});
  
const Resto = mongoose.model("Resto", RestoSchema, "resto");

export default Resto;