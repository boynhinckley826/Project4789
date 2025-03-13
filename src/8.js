// Using the `require` function to import the `path` module
const path = require('path');

// Create a new directory at the specified path
fs.mkdirSync(path.join(__dirname, 'project4789'));

// Read the file and return its contents as a string
const readFileSync = (file) => {
  const fullPath = path.resolve(file);
  try {
    return fs.readFileSync(fullPath).toString();
  } catch (err) {
    console.error(`Error reading file: ${err}`);
  }
};

// Write the given string to a new file at the specified path
const writeFileSync = (file, data) => {
  const fullPath = path.resolve(file);
  try {
    fs.writeFileSync(fullPath, data);
  } catch (err) {
    console.error(`Error writing file: ${err}`);
  }
};
