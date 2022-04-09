import mongoose from "mongoose";

const TypeRestoSchema = new mongoose.Schema({
	name: {
		type: String
	}
});
  
const TypeResto = mongoose.model("TypeResto", TypeRestoSchema, "type_resto");

export default TypeResto;