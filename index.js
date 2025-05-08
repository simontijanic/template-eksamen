require('dotenv').config();

const express = require('express');
const database = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await database.connectToDatabase();
    console.log('Database tilkoblet.');

    app.listen(PORT, () => {
      console.log(`Serveren kjører på port ${PORT}`);
    });
  } catch (error) {
    console.error('Kunne ikke starte serveren:', error.message);
    process.exit(1); 
  }
};

startServer();
