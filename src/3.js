const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  const date = now.toDateString();

  if (currentTime >= 1200 && currentTime <= 1500) {
    res.send('Good afternoon! The current time is ' + currentTime + ' on ' + date);
  } else {
    res.send('Hello! The current time is ' + currentTime + ' on ' + date);
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
