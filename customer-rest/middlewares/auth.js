const jwt = require('jsonwebtoken');
const secretKey = require('../secret.key');

module.exports = (req, resp, next) => {

    if (req.url.startsWith('/customers')) {
        // get the request header called 'Authorization'
        const auth = req.headers['authorization'];

        if (!auth) {
            resp.status(401);
            resp.json({ message: 'Authorization header is missing' });
            return;
        }

        const [bearer, token] = auth.split(' '); // sencond part of the entire authorization token (first one being the word 'Bearer')

        if (!token) {
            resp.status(401);
            resp.json({ message: 'Authorization token is missing' });
            return;
        }
        // validate the token for its integrety, if it is not tampered, then allow the user to go the actual handler
        try {
            jwt.verify(token, secretKey);
            next();
        }
        catch (err) {
            resp.status(401);
            resp.json({ message: 'Token is missing or invalid!', err });
        }
    }
    else {
        next();
    }

};