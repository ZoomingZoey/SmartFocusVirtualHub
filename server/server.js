const express = require('express');
const { join } = require('path');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

/*
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});*/

app.get('/about', function (req, res) {
  res.send('Welcome to the about page');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});