 /**
  * http server start bootstrap
  * @param  {number} port      http port.
  * @param  {function} route   route function accept a parameter (pathname)
  * @param  {object} handler   object handler all handlers mapping.
  * @return {void}
  */

 function start(port, router, handler) {
 	var http = require("http");
 	var url = require("url");
 	var onRequest = function(request, response) {
 			var pathName = url.parse(request.url).pathname;
 			console.log("request for " + pathName + " received.");
 			var content = router.route(pathName, handler);
 			response.writeHead(200, {
 				"Content-Type": "text/plain"
 			});
 			console.log(content);
 			response.write(content);
 			response.end();
 		};
 	http.createServer(onRequest).listen(port);
 	console.log("start ..", port);
 }
 exports.start = start;