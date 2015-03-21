/**
 * Created by Zida on 2015/3/17.
 */

exports.render = function(req, res){
    res.render('index', {
        title: 'Hello Socket.io',
        user: JSON.stringify(req.user)
    });
};
