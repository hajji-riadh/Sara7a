import { Schema, SchemaTypes, model } from "mongoose";

const messageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },

    receivedId: SchemaTypes.ObjectId,
  },
  { timestamps: true }
);

export const messageModel = model("message", messageSchema);