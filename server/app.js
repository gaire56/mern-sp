const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/connection');
// const User = require('./models/userSchema')

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

//middelware

const middleware = (req, res, next) => {
  // console.log(`hello my middleware`);
  next();
};

// app.get('/', (req, res) => {
//   res.send('Hello from server');
// });
app.get('/about', middleware, (req, res) => {
  console.log(`hello my about`);
  res.send('Hello from server, this is about page');
});
app.get('/contact', (req, res) => {
  res.send('Hello from server, this is contact page');
});
app.get('/signin', (req, res) => {
  res.send('Hello from server, this is login page');
});
app.get('/signup', (req, res) => {
  res.send('Hello from server, this is register page');
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
