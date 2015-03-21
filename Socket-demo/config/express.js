/**
 * Created by Zida on 2015/3/17.
 */

var config = require('./config'),
    http = require('http'),
    socketio = require('socket.io');
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    flash = require('connect-flash'),
    passport = require('passport');

module.exports = function(db){
    var app = express();
    var server = http.createServer(app);
    var io = socketio.listen(server);

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }else if(process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());

    //@TODO the update connect-mongo
    //console.log(db.connection.db);
    var mongoStore = new MongoStore({
        db: db.connection.db
    });

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret,
        store: mongoStore
    }));
    app.use(flash());

    app.set('views', __dirname+ './../app/views');
    app.set('view engine', 'ejs');

    app.use(passport.initialize())
    app.use(passport.session());

    //route
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/articles.server.routes.js')(app);

    //Serving static files
    app.use(express.static(__dirname + './../public'));


    //call the Socket.io configuration
    require('./socketio')(server, io, mongoStore);
    //返回的是socket服务
    return server;
};