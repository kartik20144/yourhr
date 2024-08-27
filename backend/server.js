import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
import path from "path";
import cors from 'cors';
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";



dotenv.config();
connectDB();
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend domain
  credentials: true, // Allow credentials
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("API is running...");
    });
  }

  app.use("/api/users", userRoutes);
  app.use("/api/upload", uploadRoutes);
  app.use("/api/jobs", jobRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
