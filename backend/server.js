import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sendEmailRouter from "./emailRoute.js";
import morgan from "morgan";
import path from "path";

dotenv.config();

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE",
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Subscriber Routes
app.use("/api/message", sendEmailRouter);

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "/resume/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(_dirname, "/resume/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, console.log(`serve at http://localhost:${PORT}`));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});