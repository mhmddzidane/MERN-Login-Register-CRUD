import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

try {
  await db.authenticate();
  console.log("database connect");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server run on port 5000"));
