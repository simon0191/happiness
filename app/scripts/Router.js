define(function(require) {

	'use strict';

	var $ = require('jquery'),
		Backbone = require('backbone'),
		HomeView = require('views/HomeView'),
		StatsView = require('views/StatsView');

	return Backbone.Router.extend({
		routes: {
			'': 'home',
			'stats': 'stats'
		},
		home: function() {			
			var homeView = new HomeView();
			homeView.render();
		},

		stats: function() {
			var statsView = new StatsView();
			statsView.render();
		}

	});

});