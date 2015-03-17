/**
 * Created by Zida on 2015/3/17.
 */

var express = require('./config/express');

var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
