"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var database_1 = require('./config/database');
var user_1 = require('./models/user');
var signup_1 = require('./api/signup');
var port = process.env.PORT || 8080;
var app = express();
var apiRoutes = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
mongoose.connect(database_1.Config.database);
app.get('/', function (req, res) {
    res.send('Hello fellows !! ;-)');
});
signup_1.signup(apiRoutes, user_1.User);
app.use('/api', apiRoutes);
app.listen(port);
console.log('started server on port ' + port);
//# sourceMappingURL=server.js.map