'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'build')));

var epRoutes = require('./routes/api')
app.use('/api', epRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

let PORT = 9000;
if(process.env.NODE_ENV == 'production'){
  PORT = 80;
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});