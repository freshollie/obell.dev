const path = require('path');
const express = require('express');

const app = express()

app.use(express.static(path.join(__dirname, 'src')));

// All things which don't exist get 404
app.use('*', (req, res) => {
    res.status(404)
    res.sendFile(path.join(__dirname, 'src', '404.html'));
});

app.listen(8080, () => {
    console.log('Serving on 8080');
});
