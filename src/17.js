// This is just an example to demonstrate how you can use Node.js and Express.js.
// Replace 'app' with your actual server name. You need to define the routes first before using this code.
const express = require('express');
const app = express();
app.use(express.json());

// Define a route for handling GET requests
app.get('/get-data', (req, res) => {
  const data = {
    "name": "Alice",
    "age": 28,
    "email": "alice@example.com"
  };

  res.status(200).json(data);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
