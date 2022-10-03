const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { mongoose } = require("./database/mongoose");

dotenv.config();

const app = express();

const indexRoute = require("./routes/index");
const adminRoute = require("./routes/admin");

//BODY-PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS HEADER MIDDLEWARE
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  // res.header("Access-Control-Allow-Credentials", "true");

  res.header(
    "Access-Control-Expose-Headers",
    "x-access-token, x-refresh-token"
  );

  next();
});

app.use("/", indexRoute);
app.use("/admin", adminRoute);

app.listen(process.env.PORT, () => {
  console.log(`connected to server on port ${process.env.PORT}`);
});
