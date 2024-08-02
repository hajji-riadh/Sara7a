import express from "express";
import { dbConnection } from "./db/dbConnections.js";
import userRouter from "./modules/user/user.routes.js";
import messageRouter from "./modules/message/message.routes.js";

import dotenv from "dotenv";
import { userModel } from "./db/models/user.model.js";

const app = express();
const port = 3000;
dotenv.config();
app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/verify/:email", async (req, res) => {
  await userModel.findOneAndUpdate(
    { email: req.params.email },
    { verified: true }
  );
  res.json({ message: "verified" });
});
console.log(process.env.JWT_KEY);

app.use(userRouter);
app.use("/messages", messageRouter);
dbConnection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));