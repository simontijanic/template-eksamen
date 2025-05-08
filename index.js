require('dotenv').config();

const express = require('express');

const database = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

database.connectToDatabase();

app.listen(PORT, () => {
  console.log("Serveren kjører");
});