var server=require("./server");
var route=require("./route");
var handlers=require("./handler");

// start http server.
server.start(8888,route,handlers.handler);