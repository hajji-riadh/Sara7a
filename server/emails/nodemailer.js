import { htmlCode } from "./html.js";
import nodemailer from "nodemailer";

export const sendEMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.P_EMAIL,
      pass: "utyzmjxxvywktqzt",
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Verify your sara7a account" <process.env.P_EMAIL>', // sender address
    to: options.email, // list of receivers
    subject: "Test nodemailer", // Subject line
    html: htmlCode(`http://localhost:3000/verify/${options.email}`), // html body
  });

  console.log("Message sent: %s", info);
};
