/**
 * Created by Zida on 2015/3/17.
 */

////Node Coding Style
//var http = require('http');
//
//http.createServer(function(req, res){
//    res.writeHead(200, {
//        'Content-Type': 'text/plain'
//    });
//    res.end('Hello Node');
//}).listen(3000);

////Connect App
//var connect = require('connect');
//var app = connect();
//
//var logger = function(req, res, next){
//    console.log(req.method, req.url);
//
//    next();
//}
//var helloWorld = function(req, res, next){
//    res.setHeader('Content-Type', 'text/plain');
//    res.end('Hello Connect');
//};
//
//var goodbyeWorld = function(req, res, next){
//    res.setHeader('Content-Type', 'text/plain');
//    res.end('Goodbye Connect');
//};
////FIFO
//app.use(logger);
//app.use('/hello', helloWorld);
//app.use('/goodbye', helloWorld);

//express
var express = require('express');
var aa= express();

app.use('/', function(rqe, res){
    res.send('Hello Express');
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');

module.exports = app;