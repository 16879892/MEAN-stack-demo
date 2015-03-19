/**
 * Created by Zida on 2015/3/17.
 */

exports.render = function(req, res){
    res.render('index', {
        title: 'Hello Passport',
        userFullName: req.user ? req.user.fullNam : ''
    });
};

//module.exports = function(app){
//    var index = require('../controllers/index.server.controller');
//    app.get('/', index.render);
//};

