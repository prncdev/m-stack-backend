const express = require('express'); 
const dotenv = require('dotenv').config();
const users = require('../Models/users');

const PORT = process.env.PORT || 5000;
const app = express();

app.use('/api/users', require('../Routers/GetUsers'));


app.listen(PORT, function(e) {
  console.log(`http://localhost:${PORT}`);
});