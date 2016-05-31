/// <reference path="../typings/index.d.ts" />

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as jwt from 'jwt-simple';

import { Config } from './config/database';
import { User } from './models/user';
import { signup } from './api/signup';

let port = process.env.PORT || 8080;
let app = express();
let apiRoutes = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

mongoose.connect(Config.database);

//Create the routes

app.get('/', (req, res) => {
    res.send('Hello fellows !! ;-)');
});

signup(apiRoutes, User);

app.use('/api', apiRoutes);

app.listen(port);
console.log('started server on port ' + port);
