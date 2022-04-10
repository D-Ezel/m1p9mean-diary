import mongoose from "mongoose";
import "./location.js";
const PointSchema = new mongoose.Schema({
	name: {
		type: String
	},
	location: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Location', 
		required: true
	},
	coordinate: {
		type: mongoose.Schema.Types.Object,
		required:true
	}
});
  
const Point = mongoose.model("Point", PointSchema, "point");

export default Point;