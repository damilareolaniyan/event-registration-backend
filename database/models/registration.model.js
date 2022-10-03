const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Reg = mongoose.model("Reg", registrationSchema);

module.exports = {
  Reg,
};
