import { userModel } from "../../db/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEMail } from "../../emails/nodemailer.js";

const signUp = async (req, res) => {
  const { name, email, password, age } = req.body;

  const user = await userModel.findOne({ email });
  if (user) return res.json({ message: "email already exists" });

  let hash = bcrypt.hashSync(password, 8);
  userModel.insertMany({ name, email, password: hash, age });
  sendEMail({ email });
  res.json({ message: "success" });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    let token = jwt.sign(
      { name: user.name, userId: user._id },
      process.env.JWT_KEY
    );
    return res.json({ message: "success", token });
  }
};

export { signUp, signIn };
