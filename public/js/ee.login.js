
var ee = {
	version : '1.0'
};

(function() {

	$.extend( ee, {
	
		init : function()
		{
			var self = this;

			self.bindingEvent();
		},

		bindingEvent : function()
		{
			if( $("#btn-login").length )
			{
				$("#btn-login").click(function() {
					
					$.post( _URL+"login/getLogin", $("#form-signin").serialize(), function( data ) {

						if( data.SUCCESS )
						{
							window.location = _URL + 'admin';
						}
						else
						{
							alert("wrong username or password");
						}

					}, 'json');

				});
			}
		}

	});


	$(function() {

		ee.init();
		
	});


})(jQuery);