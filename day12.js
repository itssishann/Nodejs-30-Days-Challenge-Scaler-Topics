const express = require('express');
const app = express();

const rateLimit = 10; 
const timeWindow = 5000; 

const requestCounts = {};
function rateLimitMiddleware(req, res, next) {
  const ip = req.ip; 
  requestCounts[ip] = requestCounts[ip] || { count: 0, lastReset: Date.now() };

  if (Date.now() - requestCounts[ip].lastReset > timeWindow) {
    requestCounts[ip].count = 0;
    requestCounts[ip].lastReset = Date.now();
  }

  if (requestCounts[ip].count >= rateLimit) {
    return res.status(429).json({ error: 'Too Many Requests' });
  }
  requestCounts[ip].count++;
  next();
}

app.use(rateLimitMiddleware);
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

const PORT = process.env.port || 4040;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
