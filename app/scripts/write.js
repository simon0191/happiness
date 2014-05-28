define(function(require) {

    'use strict';
    //======== Constants =======
    var url = 'https://api.mongolab.com/api/1/databases/happiness',
        apiKey = '5pIQfbFNaIani-w-ZfLb97QOR6xf3KRw',

    //====== Will be Public =========
        write = function(valueToWrite, dateToWrite) {
            var postUrl = url + '/collections/logs?apiKey=' + apiKey;
            var deferred = $.Deferred();

            $.ajax({
                url: postUrl,
                data: JSON.stringify({
                    'date': dateToWrite,
                    'value': valueToWrite
                }),
                type: 'POST',
                contentType: 'application/json'
            }).done(function(response) {
                deferred.resolve(response);
            });

            return deferred.promise();
        },
        findAll = function() {
            var getUrl = url + '/collections/logs?apiKey=' + apiKey;
            var deferred = $.Deferred();
            $.getJSON(getUrl, function(response) {
                deferred.resolve(response);
            });
            return deferred.promise();
        };

    //====== Public API ======
    return {
        write: write,
        findAll: findAll,
    };

});