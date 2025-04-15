import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// routes
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // allows to parse body of request
app.use(cookieParser()); // allows us to read request cookies

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT}`);
  connectDB(process.env.MONGO_URL);
});
