import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.DB_NAME,
    };
    await mongoose.connect(process.env.DB_URL, DB_OPTIONS);
    console.log("DB Connected Successfully...");
  } catch (error) {
    console.log("DB Error, ", error);
  }
};

export default connectDB;
