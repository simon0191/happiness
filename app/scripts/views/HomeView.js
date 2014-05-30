define(function(require) {

    'use strict';

    var $ = require('jquery'),
        Handlebars = require('handlebars'),
        Backbone = require('backbone'),
        templates = require('templates'),
        writer = require('write'),
        dateUtils = require('utils/dateUtils'),

        homeTpl = templates['home'];


    return Backbone.View.extend({
        el: '#content',

        render: function() {
            var that = this;
            require(['app'],function(app){
                app.getNavbar().selectTab('home');
                that.$el.html(homeTpl());
            });
        },

        events: {
            'click #save-btn': 'saveLog'
        },
        //====================
        //------ Events ------
        //====================
        saveLog: function(event) {
            var happinessVal = this.$('#happiness-range').val();
            writer.write(happinessVal, dateUtils.getCurrDate())
                .done(function(response) {
                    console.log(response);
                });
        }

    });

});