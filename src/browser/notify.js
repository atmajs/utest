function notify(state) {
	
	switch (state) {
		case 'connect':
			$('<div>').text('connected to server').appendTo('body');
			break;
	}
	
}