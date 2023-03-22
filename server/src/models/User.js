import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    firstName: { type: String, required: true, min: 2, max: 50 },
    lastName: { type: String, required: true, min: 2, max: 50 },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String, required: true, min: 5 },
    friends: { type: Array, default: [] },
    picturePath: { type: String, default: "" },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("User", User);
