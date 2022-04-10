import mongoose from "mongoose";
import "./ordered.js";

const OrderedPendingSchema = new mongoose.Schema({
	orderedref: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Ordered",
		required:true
	},
	pending_start: {
		type:Date,
		required: true
	},
	pending_end: {
		type: Date,
		required: true
	}
});
  
const OrderedPending = mongoose.model("OrderedPending", OrderedPendingSchema, "ordered_pending");

export default OrderedPending;