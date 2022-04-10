import mongoose from "mongoose";
import "./ordered.js";

const DeliveryMapSchema = new mongoose.Schema({
	orderedref: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Ordered",
		required:true
	},
	description: {
		type:String
	},
	coordinate: {
		type:mongoose.Schema.Types.Object,
		required:true
	}
});
  
const DeliveryMap = mongoose.model("DeliveryMap", DeliveryMapSchema, "delivery_map");

export default DeliveryMap;