import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";
import connnectToMongoDB from "./db/db.js";
import cors from "cors";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  try {
    connnectToMongoDB();
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
