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

require(['jquery', 'myTemplates', 'handlebars', 'write'], function($, myTemplates, Handlebars, writer) {
	'use strict';
	$('body').append(myTemplates['message']({
		msg: 'Hello World'
	}));
    
    writer.write("123456","123/4587");
    window.write1 = writer;
    alert(writer.find("123/4587"));
    
});
