const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Project4789');
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
