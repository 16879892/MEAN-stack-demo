/**
 * Created by Zida on 2015/3/18.
 */
var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true,
        match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        require: 'Username is requried',
        trim: true
    },
    password: {
        type: String,
        validate: [
            function(password){
                return password.length > 6;
            },
            'Password should be longer'
        ]
    },
    salt: { // to hash password
        type: String
    },
    provider: {//strategy
        type: String,
        required: 'Provide is required'
    },
    providerId: String, //user identifier for strategy
    providerDate: {},//user object of Oauth
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName){
    var splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

//pre-save middleware hashing your users' password
UserSchema.pre('save', function(next){
    if(this.password){
        //Random salt
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        //replace
        this.password = this.hashPassword(this.password);
    }

    next();
});

//instance method hash password
UserSchema.methods.hashPassword = function(password){
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

//instance method authenticate
UserSchema.methods.authenticate = function(password){
    return this.password = this.hashPassword(password);
}

//static method find a unique username
UserSchema.statics.findUniqueUsername = function(username, suffix, callback){
    var _this = this;
    var possibleUsername = username + (suffix || '');

    _this.findOne({
        username: possibleUsername
    }, function(err, user){
        if(!err){
            if(!user){
                callback(possibleUsername);
            }else{
                return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
            }
        }else{
            callback(null);
        }
    });
};

UserSchema.set('toJSON', {
    getter: true,
    virtuals: true
});

mongoose.model('User', UserSchema);

