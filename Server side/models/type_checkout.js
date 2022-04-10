import mongoose from "mongoose";
import "./ordered.js";

const TypeCheckoutSchema = new mongoose.Schema({
	name: {
		type: String,
		required:true
	},
	wording: {
		type: String,
		required:true
	},
	numero: {
		type: String,
		required:true
	},
	orderedref: {
		type:mongoose.Schema.Types.ObjectId,
		required: true
	}
});
  
const TypeCheckout = mongoose.model("TypeCheckout", TypeCheckoutSchema, "type_checkout");

export default TypeCheckout;