'use strict';

var nodeStatic = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new nodeStatic.Server('.', { cache: 60 });
var port = Number(process.env.PORT || 5000);

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port);
