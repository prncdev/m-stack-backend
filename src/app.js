const express = require('express'); 
const dotenv = require('dotenv').config();
const colors = require('colors');

const users = require('../Models/users');
const { errorHandler } = require('../Middleware/ErrorHandler');
const connectDB = require('../Config/db');

const PORT = process.env.PORT || 5000;
const dbURL = process.env.DB_URL;

connectDB(dbURL);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('../Routers/GetUsers'));

app.use(errorHandler);


app.listen(PORT, function(e) {
  console.log(`http://localhost:${PORT}/api/users`.magenta.underline);
});