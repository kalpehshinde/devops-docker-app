console.log("done");
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from DevOps World!');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server chal raha hai port 3000 pe');
});