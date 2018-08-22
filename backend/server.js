require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const User = require('./userModel')

const API_PORT = process.env.API_PORT || 3000;

mongoose.connect(process.env.DB_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));


// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
