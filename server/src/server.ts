/// <reference path="../typings/index.d.ts" />
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as jwt from 'jwt-simple'; 
import {database} from './config/database';

let port = process.env.PORT || 8080;
let app = express();

app.use(morgan('dev'));

app.get('/', function(req, res) {
   res.send('Hello dragons !!');
});

app.listen(port);

console.log('started server on port ' + port);