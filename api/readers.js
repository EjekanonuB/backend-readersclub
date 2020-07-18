const express = require('express');
const router = express.Router();
const readerData = require('../model/readerModel');

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

router.post('/register', (req, res) => {
  const newReader = new readerData({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    country: req.body.country,
    profession: req.body.profession
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
module.exports = router
