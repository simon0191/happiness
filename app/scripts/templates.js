define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>\r\nHow was your day today?\r\n</h1>\r\n<ul class=\"list\">\r\n	<li class=\"item\">\r\n		<input id=\"happiness-range\" type=\"range\" min=\"0\" max=\"100\" value=\"50\">\r\n	</li>\r\n	<li class=\"item\">\r\n		<button id=\"save-btn\" class=\"button button-block button-positive\">Save</button>\r\n	</li>\r\n</ul>";
  });

return this["JST"];

});