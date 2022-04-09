import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  name: {
		type: String,
	},
	hierarchy: {
		type: Number
	}  
});

const Profile = mongoose.model("profile", ProfileSchema, "profile");

export default Profile;