const mongoose = require("mongoose");

const dotenv = require("dotenv")
dotenv.config();

mongoose
  .connect(process.env.mongodbURI, { useNewUrlParser: true })
  .then(() =>
    console.log(`connected to the database on ${process.env.mongodbURI}`)
  )
  .catch((err) => console.log(err));

module.exports = {
  mongoose,
};
