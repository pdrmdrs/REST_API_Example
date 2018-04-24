const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//import routes
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1', routes);

app.get('/', (req, res, next) => res.redirect('/api/v1'));

app.use(function(req, res, next) {
    let err = new Error('Not found.');
    err.status = 404;
    next(err);
});

module.exports = app;