const express = require('express');
const logger = require('morgan');
const cors = require('cors');


const bodyParser = require('body-parser')

const routes = require('./routes/index');

var app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routes);

module.exports = app;
