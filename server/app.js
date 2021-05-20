const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const cookieParser = require('cookie-Parser');
app.use(cookieParser());

dotenv.config({ path: './config.env' });
require('./db/connection');
// const User = require('./models/userSchema')

app.use(express.json());

app.use(require('./router/auth'));

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

const PORT = process.env.PORT;

// app.get('/about',  (req, res) => {
//   console.log(`hello my about`);
//   res.send('Hello from server, this is about page');
// });
// app.get('/contact', (req, res) => {
//   res.send('Hello from server, this is contact page');
// });
// app.get('/signin', (req, res) => {
//   res.send('Hello from server, this is login page');
// });
// app.get('/signup', (req, res) => {
//   res.send('Hello from server, this is register page');
// });

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
