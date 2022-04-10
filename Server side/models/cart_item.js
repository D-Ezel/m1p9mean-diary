import mongoose from "mongoose";
import "./dishes.js";
import "./ordered.js";

const CartItemSchema = new mongoose.Schema({
	dishesref: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Dishes",
		required:true
	},
	cart_item_list: {
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
	},
	created_at: {
    type: Date,
    default: new Date()
  }
});
  
const CartItem = mongoose.model("CartItem", CartItemSchema, "cart_item");

export default CartItem;