/**
 * Created by Zida on 2015/3/18.
 */

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function(){
    var db = mongoose.connect(config.db);

    require('../app/models/user.server.model');

    return db;
};

