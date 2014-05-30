define(function(require) {

    'use strict';

    var $ = require('jquery'),
        Handlebars = require('handlebars'),
        Backbone = require('backbone'),
        templates = require('templates'),
        statsTpl = templates['stats'];


    return Backbone.View.extend({
        el: '#content',

        render: function() {
            var that = this;
            require(['app'],function(app){
                app.getNavbar().selectTab('stats');
                that.$el.html(statsTpl());
            });
        }

    });

});