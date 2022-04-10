import mongoose from "mongoose";
import "./ordered.js";
import "./accounts.js";

const OrderedSendSchema = new mongoose.Schema({
	orderedref: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Ordered",
		required:true
	},
	sending_at: {
		type:Date,
		required: true
	},
	deliveryManAccount: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Account",
		required: true
	}
});
  
const OrderedSend = mongoose.model("OrderedSend", OrderedSendSchema, "ordered_send");

export default OrderedSend;