import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  name: {
    required: [true, "Name is required"],
    type: Schema.Types.String,
  },
  email: {
    required: [true, "Email is required"],
    type: Schema.Types.String,
  },
  password: {
    required: [true, "Password is required"],
    type: Schema.Types.String,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
