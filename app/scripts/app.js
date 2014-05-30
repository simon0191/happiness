define(function(require) {

	'use strict';

	var Router = require('Router'),
		NavbarView = require('views/NavbarView'),
		Backbone = require('backbone'),
		$ = require('jquery'),

		navbar = new NavbarView(),

		//====== Will be Public =========
		init = function() {
			initRouter();
			initNavbar();
		},

		//====== Private =========

		initNavbar = function() {
			navbar.render();
		},
		initRouter = function() {
			var router = new Router();
			Backbone.history.start();
		},
		getNavbar = function() {
			return navbar;
		}

	//========= Public API =============
	return {
		init: init,
		getNavbar: getNavbar
	};
});