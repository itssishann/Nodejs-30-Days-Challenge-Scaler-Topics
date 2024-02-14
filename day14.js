const express = require('express');
const app = express();

const cache = {};

function cachingMiddleware(req, res, next) {
    const cacheKey = req.originalUrl;

    if (cache[cacheKey]) {
        const { cachedResponse, expirationTime } = cache[cacheKey];


        if (Date.now() < expirationTime) {
            console.log('Cache hit! Returning cached response.');
            return res.send(cachedResponse);
        } else {

            delete cache[cacheKey];
        }
    }

    const originalSend = res.send;
    res.send = function (body) {
        cache[cacheKey] = {
            cachedResponse: body,
            expirationTime: Date.now() + (10 * 60 * 1000),
        };
        originalSend.apply(res, arguments);
    };

    next();
}

app.use(cachingMiddleware);

app.get('/', (req, res) => {
    res.json({ message: 'This is a cached response.' });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
