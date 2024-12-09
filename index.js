const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');

// Middleware 1: Log method and URL
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

// Middleware 2: Log request headers
app.use((req, res, next) => {
    console.log('Request Headers:', req.headers);
    next();
});

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 3, // Limit to 3 requests per minute
});
app.use(limiter);

// Route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
