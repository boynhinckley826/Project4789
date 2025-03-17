
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const punctuality = req.query.punctuality;
  if (punctuality === 'yes') {
    res.send('Great job! You are on time for your classes.');
  } else {
    res.send('Sorry, you need to improve your punctuality in academics.');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});