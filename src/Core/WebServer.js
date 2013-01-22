var http = require("http");
var bootstrap = require("./../Bootstrap.js");

function start() {

    function onRequest(request, response) {
        BootStrapOutput = bootstrap.bootstrap(request);
        response.writeHead(200, {"Content-Type": BootStrapOutput.MimeType});
        response.write(BootStrapOutput.ViewOutput);
        response.end(); }

    http.createServer(onRequest).listen(8888);

}

exports.start = start;