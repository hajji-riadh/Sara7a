import mongoose from "mongoose";

export function dbConnection() {
  return mongoose.connect(
    "mongodb+srv://riadhhajji:hajji90@sara7a.qcn8ipn.mongodb.net/?retryWrites=true&w=majority&appName=Sara7a"
  )
  .then(()=>{
    console.log("Connected to MongoDB");
  })
  .catch((err)=>{
    console.log("Error connecting to MongoDB", err);
  })
}
