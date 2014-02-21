var net_portIsAvailable;


(function() {

	var TIMEOUT = 500;

	net_portIsAvailable = function(host, port, callback) {

		var socket = new (require('net').Socket),
			opened;


		socket.on('connect', function() {
			socket.end();

			opened = true;
		});


		socket.setTimeout(TIMEOUT)
		socket.on('timeout', function() {
			opened = false;
			socket.destroy()
		});

		socket.on('error', function(exception) {
			opened = false;
		});

		socket.on('close', function() {
			callback(opened === false);
		});

		socket.connect(port, host);
	};

}());