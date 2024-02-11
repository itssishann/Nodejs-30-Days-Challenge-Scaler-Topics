const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

function authenticationMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret1");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

app.use(authenticationMiddleware);

app.listen(3004, () => {
    console.log('Server listening at --> http://localhost:3004');
});