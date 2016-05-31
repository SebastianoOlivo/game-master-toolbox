import * as JwtStrategy from 'jwt-simple';
import { User } from '../models/user';
import { Config } from '../config/database';

export function passport(passport) {
    let opts = {};
    opts['secretOrKey'] = Config.secret;
    passport.use(new (<any>JwtStrategy),(opts, (jwt_payload, done) => {
        User.findOne({id: jwt_payload.id}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
      });
    }))
};
