function main() {
  const express = require('express');
  const app = express();
  
  // Add your server-side logic here
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

main();
