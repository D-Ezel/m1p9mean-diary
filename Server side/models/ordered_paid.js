import mongoose from "mongoose";
import "./ordered.js";
import "./type_checkout.js";

const OrderedPaidSchema = new mongoose.Schema({
	orderedref: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Ordered",
		required:true
	},
	type_checkout: {
		type:mongoose.Schema.Types.ObjectId,
		ref:"TypeCheckout",
		required: true
	}
});
  
const OrderedPaid = mongoose.model("OrderedPaid", OrderedPaidSchema, "ordered_paid");

export default OrderedPaid;