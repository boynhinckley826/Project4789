const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const punctualityRate = getPunctualityRate(req.query.studentID);
  res.json({ punctualityRate });
});

function getPunctualityRate(studentID) {
  // Implement logic to calculate punctuality rate for the given student ID
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
