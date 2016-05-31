"use strict";
var JwtStrategy = require('jwt-simple');
var user_1 = require('../models/user');
var database_1 = require('../config/database');
function passport(passport) {
    var opts = {};
    opts['secretOrKey'] = database_1.Config.secret;
    passport.use(new JwtStrategy, (opts, function (jwt_payload, done) {
        user_1.User.findOne({ id: jwt_payload.id }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            }
            else {
                done(null, false);
            }
        });
    }));
}
exports.passport = passport;
;
//# sourceMappingURL=passport.js.map