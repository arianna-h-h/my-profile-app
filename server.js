require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const User = require('./userModel');
const path = require("path")
const API_PORT = process.env.PORT || 8080;

console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.join(__dirname, "client", "build")))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', router);

router.get('/', (req, res) => {
  User.find((err, users) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: users });
  });
});

router.post('/user', (req, res) => {
  const user = new User();
  const { firstName, lastName, description, image } = req.body;
  if (!firstName || !lastName || !description || !image) {
    return res.json({
      success: false,
      error: 'You must provide all required fields'
    });
  }
  user.firstName = firstName;
  user.lastName = lastName;
  user.description = description;
  user.image = image;
  user.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: user });
  });
});

router.get('/user/:id', (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({
      success: false,
      error: 'You must provide an id'
    });
  }
  User.findById(id, (error, user) => {
    if (error) return res.json({ success: false, error });
    return res.json({ success: true, data: user });
  });
});

router.patch('/user/:id', (req, res) => {
  const { id } = req.params;
  if (!req.body || !id) {
    return res.json({
      success: false,
      error: 'You must provide an id and some value to change'
    });
  }
  User.findById(id, (error, user) => {
    if (error) return res.json({ success: false, error });
    const { firstName, lastName, description, image } = req.body;
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (description) user.description = description;
    if (image) user.image = image;
    user.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: user });
    });
  });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
