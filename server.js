const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const readerUrls = require('./api/readers');

dotenv.config();
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () => {
  console.log('Database is connected...');
});

app.use(express.json());
app.use(cors());
app.use('/readers', readerUrls);

app.listen(5000, () => {
  console.log('Server is up and running at port 5000');
});
