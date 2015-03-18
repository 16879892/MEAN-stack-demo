/**
 * Created by Zida on 2015/3/17.
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
    mongoose = require('./config/mongoose');

//@Todo: order 测试
var db = mongoose();
var app = express();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
