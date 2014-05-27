define(function (require) {

    "use strict";

    
    
    
    var $ = require('jquery'), a = {},

        write = function (valueToWrite, fecha) {
           $.ajax( { url: "https://api.mongolab.com/api/1/databases/dserrano3/collections/my-coll?apiKey=5pIQfbFNaIani-w-ZfLb97QOR6xf3KRw",
		  data: JSON.stringify( { fecha : valueToWrite } ),
		  type: "POST",
		  contentType: "application/json" } );
        },
        
        //funcion auxiliar para encontrar valor en DB, se neesitan 2 por lo que es asincrono.
        function getval( callback ){
            jQuery.getJSON('https://api.mongolab.com/api/1/databases/happiness/collections/my-coll?apiKey=5pIQfbFNaIani-w-ZfLb97QOR6xf3KRw',            function(data) {
            // We can't use .return because return is a JavaScript keyword.
            callback(data[0]);
        });
        
        //Funcion para ser llamada desde otro js, retorna el valor de la fecha que se le pasa.
        find = function(fecha) {
            var retorno;
            $(document).ready(function() {
                getval( function ( value ) { 
                    retorno = value;
                } );
            });
            // Este valor es un mapa se puede hacer retorno['x'] para probar.
            return retorno[fecha];
        };
        
        
}
    

    // The public API
    return {
        write: write,
        find: find
    };

});