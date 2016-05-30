"use strict";
/// <reference path="../typings/index.d.ts" />
var express = require('express');
var morgan = require('morgan');
var port = process.env.PORT || 8080;
var app = express();
app.use(morgan('dev'));
app.get('/', function (req, res) {
    res.send('Hello dragons !!');
});
app.listen(port);
console.log('started server on port ' + port);
//# sourceMappingURL=server.js.map