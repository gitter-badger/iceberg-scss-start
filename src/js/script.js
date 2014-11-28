(function ($) {
	var Private = {
		init: function() {
			Private.documentReady();
	    },
	    documentReady: function () {
	    	console.log("Document ready!");
	    }
	}
	Public = {}
	$(document).ready(Private.init);
})(jQuery)