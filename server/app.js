const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from server');
});
app.get('/about', (req, res) => {
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
