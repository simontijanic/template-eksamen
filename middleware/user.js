const userMiddleware = (req, res, next) => {
  if (req.session && req.session.user) {
    req.user = req.session.user; // Attach user info to req
    res.locals.user = req.user; // Make user info available in views
  } else {
    req.user = null;
    res.locals.user = null;
  }
  next();
};

module.exports = userMiddleware;
