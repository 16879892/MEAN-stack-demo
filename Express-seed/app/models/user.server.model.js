/**
 * Created by Zida on 2015/3/18.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true,
        match: /.+\@.+\..+/
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        require: true
    },
    password: {
        type: String,
        validate: [
            function(password){
                return password.length >=6;
            },
            'Password should be longer'
        ]
    },
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', UserSchema);

