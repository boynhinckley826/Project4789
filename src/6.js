// Importing necessary libraries
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initializing the app and setting up middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Defining a GET endpoint to retrieve all projects
router.get('/projects', async (req, res) => {
  const projects = await Project.find({});
  res.send(projects);
});

// Defining a POST endpoint to create a new project
router.post('/project', async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send('Please provide both a title and description');
  }
  const project = new Project({
    _id: uuidv4(),
    title,
    description,
  });
  await project.save();
  res.send(project);
});

// Defining a PUT endpoint to update an existing project
router.put('/project/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send('Please provide both a title and description');
  }
  await Project.findByIdAndUpdate(id, { $set: { title, description } });
  const project = await Project.findById(id);
  res.send(project);
});

// Defining a DELETE endpoint to delete an existing project
router.delete('/project/:id', async (req, res) => {
  const { id } = req.params;
  await Project.findOneAndRemove({ _id: id });
  res.send('Project deleted successfully');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
