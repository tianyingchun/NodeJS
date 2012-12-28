 /**
  * Router all http request and dispatcher specific handler.
  * @param  {string} pathname url path name
  * @param  {object} a object contains all handlers.
  * @return {string}
  */
 var route = function(pathname,handler) {
     if(typeof handler[pathname] ==='function'){
     	return handler[pathname]();
     }
     else{
     	console.log("no request handler found!");
     	return "404 not found";
     }
 };
 exports.route = route;