import mongoose from "mongoose";
import "./location.js";
const CitySchema = new mongoose.Schema({
	name: {
		type: String
	},
	locations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }]
});
  
const City = mongoose.model("City", CitySchema, "city");

export default City;