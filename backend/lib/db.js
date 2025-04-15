import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected!!\nHostname: ${res.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB: `, error.message);
    process.exit(1);
    // 1 indicates failure in connection whereas 0 indicates success
  }
};
