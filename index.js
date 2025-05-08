require('dotenv').config();

const express = require('express');

// IMPORT
const database = require('./config/database');
const authRoute = require('./routes/authRoute');
const sessionMiddleware = require('./middleware/session');

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json()); // parse JSON-forespørsel
app.use(express.urlencoded({ extended: true })); // parse URL-kodede forespørsel
app.set('view engine', 'ejs');

app.use(sessionMiddleware);

// ROUTES
app.use(authRoute)

// INITIALIZE
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
