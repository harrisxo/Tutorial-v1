const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: hi@yow.com');
});

app.get('/about', (req, res) => {
  res.send('My name is h710 and I am a web developer.');
});

app.get('/login', (req, res) => {
  res.send('<h1>Login</h1>');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
