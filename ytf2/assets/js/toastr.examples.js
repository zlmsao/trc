/*!
 * Toastr - ICOCrypto v1.9.0 by Softnio.
**/
NioApp = (function (NioApp, $, window) {
    "use strict";
    
	var $toastr_top_full = $('.toastr-top-full')
    
	NioApp.Toastr = {};
	
	// ToastrJs @v1.0
    NioApp.Toastr.ToastrJs = function () {
        if ($toastr_top_full.exists()) {
			$toastr_top_full.each(function(){
				var $self = $(this);
				$self.on("click", function(e){
                    toastr.clear();
                    toastr.options = {
                        "closeButton": true,
                        "newestOnTop": false,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-full-width",
                        "showDuration": "1000",
                        "hideDuration": "10000",
                        "timeOut": "2000",
                        "extendedTimeOut": "4000"
                    };
                    toastr.info('This will available a little bit later. Stay tuned!');
                    e.preventDefault();
                });
			});
        }
	};
	
    NioApp.components.docReady.push(NioApp.Toastr.ToastrJs);
	return NioApp;
})(NioApp, jQuery, window);
    