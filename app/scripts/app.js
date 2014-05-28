define(['jquery', 'templates', 'handlebars', 'write','utils/dateUtils'],
	function($,templates, Handlebars, writer,dateUtils) {
		'use strict';

		//====== Private =========
		var $el = $('<div/>'),
			$headerEl = $('<div/>'),

			initHeader = function() {
				$headerEl.append(templates['navbar']());
				$headerEl.on('click','.icon',function(){
					$('.icon').removeClass('icon-selected');
					$(this).addClass('icon-selected');
				});

				$('#header').html($headerEl);
			},

		//====== Will be Public =========
			init = function() {
				initHeader();
				$el.append(templates['home']());

				$el.on('click','#save-btn',function() {
					var happinessVal = $('#happiness-range').val();
					writer.write(happinessVal,dateUtils.getCurrDate())
					.done(function(response) {
						console.log(response);
					});
				});

				$('#content').html($el);
			};

		//========= Public API =============
		return {
			init: init
		};
	});