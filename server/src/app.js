const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('sunucu ayakta');
});

app.listen(4500);