
const { app } = require('express')();

app.get('/punctuality', (req, res) => {
  res.send(`
  <h1>Punctuality in Academics</h1>
  <p>It is an essential aspect of academic performance that requires regular attendance and timely submissions of assignments.</p>
  <ul>
    <li>On-time submissions ensure fair grading and avoids late penalties.</li>
    <li>Lack of punctuality can result in loss of credit for missed assignments or exams.</li>
    <li>Timely completion of assignments helps to maintain a consistent academic record.</li>
  </ul>
  `);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});