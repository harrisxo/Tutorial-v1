const express = require('express');
const app = express();
const port = 3000;
const https = require('https');

app.get('/', (req, res) => {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?lat=50.429970&lon=9.767517&appid=05ffac40944f527a052db698e565d472&units=metric';
  https.get(url, (response) => {
    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
      res.write(`<h1>Es ist aktuel ${temp}C</h1>`);
      res.write(`<h2>Aktuel ist das Wetter : ${desc}</h2>`);
      res.write(`<img src=${imageURL}>`);
      res.send();
    });
  });
});

// listen to port 3000
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
