require.config({

	baseUrl: 'scripts',
	paths: {
		jquery: '../../bower_components/jquery/dist/jquery',
		handlebars: '../../bower_components/handlebars/handlebars',
		backbone: '../../bower_components/backbone/backbone',
		underscore: '../../bower_components/underscore/underscore',
		templates: './templates'
	},
	shim: {
		handlebars: {
			exports: 'Handlebars',
			init: function() {
				this.Handlebars = Handlebars;
				return this.Handlebars;
			}
		},
		backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
	}
});


require(['app'], function(app) {
	'use strict';
	app.init();
});
