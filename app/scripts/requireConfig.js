require.config({

	baseUrl: 'scripts',
	paths: {
		jquery: '../../bower_components/jquery/dist/jquery',
		handlebars: '../../bower_components/handlebars/handlebars',
		templates: './templates'
	},
	shim: {
		handlebars: {
			exports: 'Handlebars',
			init: function() {
				this.Handlebars = Handlebars;
				return this.Handlebars;
			}
		}
	}
});


require(['app'], function(app) {

	'use strict';
<<<<<<< HEAD:app/scripts/main.js
	$('body').append(myTemplates['message']({
		msg: 'Hello World'
	}));
    
    writer.write("123456","123/4587");
    window.write1 = writer;
    alert(writer.find('x'));
    
});
=======
	app.init();
});
>>>>>>> 3ec8393e0dcc72c82039165fec9d4fa6152cdad4:app/scripts/requireConfig.js
