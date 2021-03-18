const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB =
  'mongodb+srv://gaire:Test123@cluster0.vxmh3.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection sucessful`);
  })
  .catch((err) => console.log(`no connection`));

//middelware

const middleware = (req, res, next) => {
  console.log(`hello my middleware`);
  next();
};

app.get('/', (req, res) => {
  res.send('Hello from server');
});
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

app.listen(3000, () => {
  console.log('server is running at 3000');
});
