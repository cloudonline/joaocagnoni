var jsdom = require("jsdom").jsdom;

var document = jsdom('<html><head></head><body>hello world<div id="primeira">Primeira Div</div></body></html>');

var teste = document.getElementById("primeira").innerHTML;

console.log(teste);
