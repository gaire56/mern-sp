const express = require('express');
const router = express.Router();

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
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    await user.save();

    res.status(201).json({ message: 'User register successfuly' });
  } catch (err) {
    console.log(error);
  }
});
/**async register path end */

/**login path start */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'please fill the data' });
    }

    const userLogin = await User.findOne({ email: email });

    console.log(userLogin);

    if (!userLogin) {
      res.status(400).json({ error: 'user error' });
    } else {
      res.json({ message: 'user signin successfully' });
    }
  } catch (err) {
    console.log(err);
  }
});
/**login path end */

module.exports = router;
