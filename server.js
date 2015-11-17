'use strict';

var express = require('express'),
	compression = require('compression');

var app = express();
app.use(compression());

app.use(express.static(__dirname + '/public'));

var port = process.argv[2] || process.env.PORT || 8080;
app.listen(port);
console.log("Listen on port", port);