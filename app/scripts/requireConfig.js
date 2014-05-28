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
	app.init();
});
