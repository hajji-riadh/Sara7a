import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      minLength: [3, "too short name"],
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minLength: [3, "too short password"],
      required: true,
    },
    age: {
      type: Number,
      min: [5],
      max: [100],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const userModel = model("user", userSchema);
