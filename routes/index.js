const express = require("express");

const router = express.Router();

const { Reg } = require("../database/models/index");

router.post("/", (req, res, next) => {
  const form = req.body;
  const newAttendee = new Reg(form);

  newAttendee
    .save()
    .then((attendee) => {
      console.log(attendee);
      res.send(attendee);
    })
    .catch((err) => console.log(err));
});

router.post("/search", (req, res, next) => {
  const form = req.body;

  Reg.find({
    $or: [
      { firstName: form.search },
      { lastName: form.search },
      { email: form.search },
      { phone: form.search },
    ],
  }).then((attendee) => res.send(attendee));
});

module.exports = router;
