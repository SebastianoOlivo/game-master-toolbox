import * as mongoose from 'mongoose';
let Schema = mongoose.Schema;
import * as bcrypt from 'bcrypt';

let UserSchema = new Schema({
    pseudo: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', (next) => {
    let user = this;

    if(user.isModified('password') || user.isNew) {
        bcrypt.genSalt(10, (err, salt) => {
            if(err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, (err, hash) => {
                if(err) {
                    return next(err);
                }
                user.password = hash;
                next();
            })
        })
    } else {
        return next();
    }
});

UserSchema.method["comparePassword"] = function(passw, cb) {
    bcrypt.compare(passw, this.password, (err, isMatch) => {
        if(err) {
            return cb(err);
        }
        cb(null, isMatch);
    })
};

export let User = mongoose.model('User', UserSchema);
