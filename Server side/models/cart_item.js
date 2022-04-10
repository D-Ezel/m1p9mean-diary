import mongoose from "mongoose";
import "./dishes.js";
import "./ordered.js";

const CartItemSchema = new mongoose.Schema({
	dishesref: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Dishes",
		required:true
	},
	ordered: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Ordered",
		required:true
	},
	qty: {
		type: Number,
		required:true
	},
	price: {
		type: Number,
		required: true
	}
});
  
const CartItem = mongoose.model("CartItem", CartItemSchema, "cart_item");

export default CartItem;