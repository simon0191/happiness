define(function (require) {

    "use strict";

    
    
    
    var $ = require('jquery'), a = {},

        write = function (valueToWrite, fecha) {
            if (!a[fecha]) {a[fecha] = []; }
            a[fecha].push(valueToWrite);
        },
        
        find = function(fecha) {
            return a[fecha];
        };

    // The public API
    return {
        write: write,
        find: find
    };

});