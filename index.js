const express = require('express');
const app = express();

// Custom middleware
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

// route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
