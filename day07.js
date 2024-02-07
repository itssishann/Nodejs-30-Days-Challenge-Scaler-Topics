const express = require("express");
const app = express();
const PORT = process.env.PORT || 4040;

function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date();
  const httpMethod = req.method;
  console.log(`${timestamp} - ${httpMethod} request received`);
  next();
}

app.use(requestLoggerMiddleware);

app.get("/", (req, res) => {
  const timestamp = new Date();
  res.send(`Request Received at --> ${timestamp} 
   Method is --> ${req.method}`);
});

app.listen(PORT, () => {
  console.log(`Server Listening at --> ${PORT}`);
});
