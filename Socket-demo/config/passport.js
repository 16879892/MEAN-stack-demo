/**
 * Created by Zida on 2015/3/18.
 */
var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function(){
    var User = mongoose.model('User');

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findOne({
            _id: id
        }, function(err, user){
            done(err, user);
        });
    });

    require('./strategies/local.js')();
};
