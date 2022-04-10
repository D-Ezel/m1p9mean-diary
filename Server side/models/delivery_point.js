import mongoose from "mongoose";
import "./point.js";
import "./ordered.js";

const DeliveryPointSchema = new mongoose.Schema({
	orderedref: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Ordered",
		required:true
	},
	pointref: {
		type:mongoose.Schema.Types.ObjectId,
		required:true
	}
});
  
const DeliveryPoint = mongoose.model("DeliveryPoint", DeliveryPointSchema, "delivery_point");

export default DeliveryPoint;