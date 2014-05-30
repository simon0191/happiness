define(function(require) {

    'use strict';

    var $ = require('jquery'),
        Handlebars = require('handlebars'),
        Backbone = require('backbone'),
        templates = require('templates'),
        
        navbarTpl = templates['navbar'];

    return Backbone.View.extend({
        el: '#header',
        selectTab: function(name) {
            this.$('.tab-item').removeClass('tab-selected');
            this.$('.tab-item[data-name="%"]'.replace('%',name)).addClass('tab-selected');
        },
        render: function() {
            this.$el.html(navbarTpl());
        },
        events: {
            'click .tab-item': 'tabClick'
        },
        //====================
        //------ Events ------
        //====================
        tabClick: function(ev) {
            this.$('.tab-item').removeClass('tab-selected');
            this.$(ev.currentTarget).addClass('tab-selected');
        }

    });

});