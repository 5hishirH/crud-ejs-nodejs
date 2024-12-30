import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";
import path from "path";

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(cookieParser());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// import api routes

import sampleApiRouter from "./routes/sample.routes";
import noteApiRouter from "./routes/note.routes";

app.use("/api/v1/sample", sampleApiRouter);
app.use("/api/v1/note", noteApiRouter);

// view routes

import viewRouter from "./routes/view.routes";

app.use("/", viewRouter);

export default app;
