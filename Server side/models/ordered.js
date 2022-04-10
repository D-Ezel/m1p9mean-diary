import mongoose from "mongoose";
import "./cart_item.js";

const OrderedSchema = new mongoose.Schema({
	accountref: {
		type:mongoose.Schema.Types.ObjectId,
		ref:"Account",
		required: true
	},
	cart_item: [{
		type: mongoose.Schema.Types.ObjectId,
		ref:"CartItem",
	}],
	sumQty: {
		type: Number,
		required:true
	},
	sumPrice: {
		type: Number,
		required: true
	},
	typeOfDelivery: {
		type: String,
		required: true
	},
	timeToDelivery: {
		type:String,
		required: true
	},
	created_at: {
    type: Date,
    default: new Date()
  },
	state: {
		type: Number,
		default: 0
	}
});
  
const Ordered = mongoose.model("Ordered", OrderedSchema, "ordered");

export default Ordered;