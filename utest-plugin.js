
var uri = new net.URI(include.url);

include.exports = {
	register: function(globals){
		
		globals.extend({
			actions: {
				test: getPath('/utest.node.js')
			},
			server: {
				controllers: [getPath('env/controller.js')],
				websockets: {
					'/node' : getPath('/utest.server.js')
				}
			}
		});

	}
};

function getPath(path) {
	return uri.combine(path).toString();
}