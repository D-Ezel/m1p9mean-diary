import mongoose from "mongoose";
import "./ordered_send.js";

const OrderedReceivedSchema = new mongoose.Schema({
	orderedSendref: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"OrderedSend",
		required:true
	},

	codeReceived: {
		type: String,
		required:true
	},

	received_at: {
		type:Date,
		required: true
	}
});
  
const OrderedReceived = mongoose.model("OrderedReceived", OrderedReceivedSchema, "ordered_received");

export default OrderedReceived;