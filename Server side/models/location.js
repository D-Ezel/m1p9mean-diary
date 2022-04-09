import mongoose from "mongoose";
import "./city.js";
const LocationSchema = new mongoose.Schema({
	name: {
		type: String
	},
	cityref: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'City',
    required: true
	},
	coordinate: {
		type: mongoose.Schema.Types.Object,
		required:true
	}
});
  
const Location = mongoose.model("Location", LocationSchema, "location");

export default Location;