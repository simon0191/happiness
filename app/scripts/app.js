define(['jquery', 'templates', 'handlebars', 'write','utils/dateUtils'],
	function($, templates, Handlebars, writer,dateUtils) {
		'use strict';

		//====== Private =========
		var $el = $('<div/>'),

		//====== Will be Public =========
			init = function() {
				$el.append(templates['home']());

				$el.on('click','#save-btn',function() {
					var happinessVal = $('#range-input').val();
					writer.write(happinessVal,dateUtils.getCurrDate())
					.done(function(response) {
						alert('');
					});
				});

				$('#content').html($el);
			};

		//========= Public API =============
		return {
			init: init
		}
	});