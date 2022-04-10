import mongoose from "mongoose";
import "./ordered.js";

const CodeReceivedOrderedSchema = new mongoose.Schema({
	orderedref: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"Ordered",
		required:true
	},
	codeReceivedToValidate: {
		type:String,
		required: true
	}
});
  
const CodeReceivedOrdered = mongoose.model("CodeReceivedOrdered", CodeReceivedOrderedSchema, "code_received_ordered");

export default CodeReceivedOrdered;