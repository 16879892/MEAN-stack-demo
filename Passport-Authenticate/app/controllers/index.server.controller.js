/**
 * Created by Zida on 2015/3/17.
 */

exports.render = function(req, res){
    //Record the time of the last request
    if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('index', {
        title: 'Hello Ejs'
    })
};
