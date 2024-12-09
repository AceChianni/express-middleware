const express = require('express');
const app = express();

// custom middleware
app.use((req, res, next => {
    console.log(`${req.method} request to {req.url}`);
    next()
}));

// route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});




// start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
