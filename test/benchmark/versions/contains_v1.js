module.exports = {
	contains: function(str, search){
		return  new RegExp(search).test(str);
	}
};