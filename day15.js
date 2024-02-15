const express = require('express');
const app = express();

app.use(express.json());


function loggingMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const headers = req.headers;
  const body = req.body;

  console.log(`Timestamp: ${timestamp}`);
  console.log(`Method: ${method}`);
  console.log(`URL: ${url}`);
  console.log(`Headers: ${JSON.stringify(headers)}`);
  console.log(`Body: ${JSON.stringify(body)}`);
  next();
}

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send(`<h1>Home Page!</h1>`)
});

app.post("/", (req, res) => {
  res.send(`<h1>Post Method! Test</h1>`)
});

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
