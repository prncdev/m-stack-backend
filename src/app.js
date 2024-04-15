const express = require('express'); 
const dotenv = require('dotenv').config();
const colors = require('colors');

const { errorHandler } = require('../middleware/ErrorHandler');
const connectDB = require('../config/db');

const PORT = process.env.PORT || 5000;
const dbURL = process.env.DB_URL;

connectDB(dbURL);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('../routers/GetUsers'));

app.use(errorHandler);


app.listen(PORT, function(e) {
  console.log(`http://localhost:${PORT}/api/users`.magenta.underline);
});