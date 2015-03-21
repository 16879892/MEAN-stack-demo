/**
 * Created by Zida on 2015/3/21.
 */
var config = require('./config'),
    cookieParser = require('cookie-parser'),
    passport = require('passport');

/**
 * @description
 * @param {HTTP object} server 带socket服务的http服务
 * @param {Socket.io Object} io 监听server的Socket服务
 * @param {MongoStore Object} mongoStore mongoDB的存储
 *
 * */
module.exports = function(server, io, mongoStore){
    io.use(function(socket, next){
        //解析请求 socket.request
        cookieParser(config.sessionSecret)(socket.request, {}, function(err){
            //获得sessionId
            var sessionId = socket.request.signedCookies['connect.sid'];

            //获得数据库中的session数据
            mongoStore.get(sessionId, function(err, session){
                socket.request.session = session;
                //填充 socket.request.user对象
                passport.initialize()(socket.request, {}, function(){
                    passport.session()(socket.request, {}, function(){
                        if(socket.request.user){
                            next(null, true);
                        }else{
                            next(new Error('User is not authenticated'), false);
                        }
                    });
                });
            });
        });

        io.on('connection', function(socket){
            console.log('a socket is connected');
            require('../app/controllers/chat.server.controller')(io, socket);
        });
    });

};
