const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;

mongoose.connect(config.uri, (error) => {
    if (error) {
        console.log('Could NOT connected to DB: ', error);
    } else {
        console.log('connected to DB: ', config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/client/'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
