const express = require('express');
const app = express();

app.use(express.json());

app.post('/punctuality', (req, res) => {
  const { studentId } = req.body;
  // Your logic to check and update punctuality in the database goes here

  if (studentId === '1234567890') {
    res.status(200).json({ message: 'Student is in time' });
  } else {
    res.status(403).json({ message: 'Student is not in time' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
