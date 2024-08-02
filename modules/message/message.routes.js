import express from "express";
import { addMsg, getUserMsg } from "./message.controller.js";
import { auth } from "../../middleware/auth.js";

const messageRouter = express.Router();

messageRouter.post("/", auth, addMsg);
messageRouter.get("/", auth, getUserMsg);

export default messageRouter;
