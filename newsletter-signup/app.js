const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  console.log(firstName, lastName, email);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
