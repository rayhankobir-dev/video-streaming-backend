import mongoose from "mongoose";
import { db } from "../config.js";

//db connection
const connectDB = async () => {
  try {
    const conntectionInstance = await mongoose.connect(`${db.uri}/${db.name}`);
    console.log(
      `Database connected! \nHOST: ${conntectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Database connection failed! \nERROR: ", error.message);
    process.exit(1);
  }
};

export default connectDB;
