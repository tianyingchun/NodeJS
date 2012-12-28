var _handlerMapping = {},
	_handler = {
		start: function() {
			function sleep(milliSeconds) {
				var startTime = new Date().getTime();
				while(new Date().getTime() < startTime + milliSeconds);
			}
			 
			console.log("handler start invoke.");
			return "exec start handler...";
		},
		upload: function() {
			console.log("handler upload invoke.");
			return "exec upload handler...";
		}
	};
_handlerMapping["/"] = _handler.start;
_handlerMapping["/start"] = _handler.start;
_handlerMapping["/upload"] = _handler.upload;

exports.handler = _handlerMapping;