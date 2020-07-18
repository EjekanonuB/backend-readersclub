const express = require('express');
const router = express.Router();
const readerData = require('../model/readerModel');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
  readerData
    .find()
    .then(reader => {
      res.json(reader);
    })
    .catch(error => {
      res.json(error);
    });
});

router.post('/register', async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, saltPassword);

  const newReader = new readerData({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    country: req.body.country,
    profession: req.body.profession,
  });

  newReader
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});
module.exports = router;
