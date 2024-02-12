
const express = require('express');
const app = express();
const path = require('path');

function staticFileServer(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}

app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', staticFileServer);

app.listen(8080, () => {
  console.log('Server listening at --> http://localhost:8080');
});
