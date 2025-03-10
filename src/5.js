const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const time = new Date().toLocaleTimeString();
  const message = `The current time is ${time}.`;
  res.send(message);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
