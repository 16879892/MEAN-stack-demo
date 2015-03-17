/**
 * Created by Zida on 2015/3/17.
 */

module.exports = function(app){
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};