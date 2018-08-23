require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const User = require('./userModel');

const API_PORT = process.env.API_PORT || 3000;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

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
    return res.json({ success: true });
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
      return res.json({ success: true });
    });
  });
});
