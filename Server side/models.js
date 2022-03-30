import mongoose from "mongoose";

const CustomersSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	name: {
		type: String,
	},
});

const Customer = mongoose.model("customers", CustomersSchema);

export default Customer;