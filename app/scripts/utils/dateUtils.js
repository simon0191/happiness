define([], function() {

	//======== Private ===========
	var to2Places = function(n) {
			return n < 10 ? '0' + n : '' + n;
		},

	//====== Will be Public =========
		getCurrDate = function() {
			var currDate = new Date();
			var day = to2Places(currDate.getDate());
			var month = to2Places(currDate.getMonth());
			var year = currDate.getFullYear();

			return
		};

	//======== Public API ===========
	return {
		getCurrDate: getCurrDate
	};
});