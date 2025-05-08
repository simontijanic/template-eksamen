const session = require('express-session');

const sessionMiddleware = session({
  secret: process.env.SECRET, 
  resave: false, // Prevents session from being saved back to the store if unmodified
  saveUninitialized: false, // Prevents saving uninitialized sessions
  cookie: {
    secure: false, //  true if using HTTPS
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    maxAge: 1000 * 60 * 60 * 24, // 1 dag
  },
});

module.exports = sessionMiddleware;
