const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

module.exports = app;