const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);
      ws.send(`${message}`);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
}

setupWebSocket(server);


app.use(express.static(path.join(__dirname, 'public')));

app.get('/websocket', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'web2.html'));
});

const PORT = process.env.PORT || 4040;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
