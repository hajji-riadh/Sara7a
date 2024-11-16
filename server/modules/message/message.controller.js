import { messageModel } from "../../db/models/message.model.js";

const addMsg = async (req, res) => {
  const { message, receivedId } = req.body;
  await messageModel.insertMany({ message, receivedId });
  res.json({ message: "success" });
};

const getUserMsg = async (req, res) => {
  const messages = await messageModel.find({ receivedId: req.userId });
  res.json({ message: "success", messages });
};

export { addMsg, getUserMsg };
