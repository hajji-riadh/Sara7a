import mongoose from "mongoose";

export function dbConnection() {
  return mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
}
