const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middlewar/authenticate');

require('../db/connection');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
  res.send('Hello from server router');
});

/**using promices */
// router.post('/register', (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: 'please fill the all proporties' });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: 'email already exist' });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: 'User register successfuly' });
//         })
//         .catch((err) => req.status(500).json({ error: 'failed to register' }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
/**promise end */

/**using async ==> register path start */
router.post('/register', async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: 'please fill the all proporties' });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: 'email already exist' });
    } else if (password != cpassword) {
      return res.status(422).json({ error: 'password not matched' });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();

      res.status(201).json({ message: 'User register successfuly' });
    }
  } catch (err) {
    console.log(error);
  }
});
/**async register path end */

/**login path start */
router.post('/login', async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'please fill the data' });
    }

    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie('jwttoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: 'Invalid Credientials' });
      } else {
        res.json({ message: 'user signin successfully' });
      }
    } else {
      res.status(400).json({ error: 'Invalid Credientials' });
    }
  } catch (err) {
    console.log(err);
  }
});
/**login path end */

/**About Us Page */

router.get('/about', authenticate, (req, res) => {
  // console.log(`hello my about`);
  res.send(req.rootUser);
});

/**About us page end */

/**Get userData for ContactUS and Home page */

router.get('/getdata', authenticate, (req, res) => {
  // console.log(`hello my getdata`);
  res.send(req.rootUser);
});

/**Get userData for ContactUS and Home page end */

/**Contact Us page */

router.post('/contact', authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      console.log('error in contact form');
      return res.json({ error: 'plese filled the contact form' });
    }

    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );

      await userContact.save();

      res.status(201).json({ message: 'User Contact Sucessfully' });
    }
  } catch (error) {
    console.log(error);
  }
});

/**Contact Us page */

/**Logout page */

router.get('/logout', (req, res) => {
  console.log(`hello my logout`);
  res.clearCookie('jwttoken', { path: '/' });
  res.status(200).send('User logout');
});

/**Logout page */

module.exports = router;
