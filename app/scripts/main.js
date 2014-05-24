/** Main.js **/
require.config({

	baseUrl: 'scripts',
	paths: {
		jquery: '../../bower_components/jquery/dist/jquery',
		handlebars: '../../bower_components/handlebars/handlebars',
		myTemplates: './templates'
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

require(['jquery', 'myTemplates', 'handlebars'], function($, myTemplates, Handlebars) {
	'use strict';
	$('body').append(myTemplates['message']({
		msg: 'Hello World'
	}));
});