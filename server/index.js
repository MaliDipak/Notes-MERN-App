import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.conf.js";
import NoteRouter from "./routes/note.routes.js";

//Initializing app
const app = express();

// CORS Policy
app.use(cors());

// JSON
app.use(express.json());

// Load Routes
app.use("/api/note", NoteRouter);

//Database Connection
connectDB();

//server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
