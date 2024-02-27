const jwt = require('jsonwebtoken');
//sample of users
const users = [
    { id: 1, username: 'admin', role: 'admin' },
    { id: 2, username: 'user', role: 'user' }
];

const secretKey = 'IG-01';

function authenticateAndAuthorize(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Authentication token is required' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        if (!decoded.user) {
            return res.status(401).json({ message: 'Invalid token content' });
        }

        const user = users.find(u => u.id === decoded.user.id);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
       
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized access' });
        }
        next();
    });
}

module.exports = authenticateAndAuthorize;
