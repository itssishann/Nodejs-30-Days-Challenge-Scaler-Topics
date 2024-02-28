const WebSocket = require('ws');

function setupWebSocketServer(server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', function connection(ws) {
        console.log('A new client connected');


        ws.on('message', function incoming(message) {
            console.log('Received: %s', message);

            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });

        ws.on('close', function () {
            console.log('A client disconnected');
        });
    });
}

module.exports = setupWebSocketServer;
