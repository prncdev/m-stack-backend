const express = require('express'); 
const dotenv = require('dotenv').config();
const users = require('../Models/users');
const { errorHandler } = require('../Middleware/ErrorHandler');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('../Routers/GetUsers'));

app.use(errorHandler);


app.listen(PORT, function(e) {
  console.log(`http://localhost:${PORT}`);
});