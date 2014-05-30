define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"main-question\">\r\nHow was your day today?\r\n</h1>\r\n<ul class=\"list\">\r\n	<li class=\"item\">\r\n		<div class=\"row\">\r\n			<div class=\"emoticon col col-10\">: (</div>\r\n			<div class=\"col col-80 range range-energized\">\r\n				<input id=\"happiness-range\" type=\"range\" min=\"0\" max=\"100\" value=\"50\">\r\n			</div>\r\n			<div class=\"emoticon col col-10\">:D</div>\r\n		</div>\r\n	</li>\r\n	<li class=\"item\">\r\n		<button id=\"save-btn\" class=\"button button-block button-positive\">Save</button>\r\n	</li>\r\n</ul>";
  });

this["JST"]["navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"bar bar-header bar-calm tabs\">\r\n  <a class=\"tab-item tab-selected\" data-name=\"home\" href=\"#/\">\r\n    <i class=\"icon ion-compose\"> Log</i>\r\n  </a>\r\n  <a class=\"tab-item\" data-name=\"stats\" href=\"#/stats\">\r\n    <i class=\"icon ion-stats-bars\"> Stats</i>\r\n  </a>\r\n</div>";
  });

this["JST"]["stats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"main-question\">\r\n	Aquí se van a ver las estadísticas :D\r\n</h1>\r\n<div>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp*<br>\r\n|*<br>\r\n------------------------------------\r\n</div>";
  });

return this["JST"];

});