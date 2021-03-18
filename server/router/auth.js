const express = require('express');
const router = express.Router();

require('../db/connection');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
  res.send('Hello from server router');
});

router.post('/register', (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: 'please fill the all proporties' });
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: 'email already exist' });
      }

      const user = new User({ name, email, phone, work, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: 'User register successfuly' });
        })
        .catch((err) => req.status(500).json({ error: 'failed to register' }));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
