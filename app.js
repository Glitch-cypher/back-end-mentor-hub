const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require ("cors")

const indexRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//http://localhost:5000/feedback
app.use("/", indexRouter);

module.exports = app;
