import { htmlCode } from "./html.js";
import nodemailer from "nodemailer";

export const sendEMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hajjiriadh378@gmail.com",
      pass: "",
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Saraha App" <hajjiriadh378@gmail.com>', // sender address
    to: options.email, // list of receivers
    subject: "Test", // Subject line
    html: htmlCode(`http://localhost:3000/verify/${options.email}`), // html body
  });

  console.log("Message sent: %s", info);
};
