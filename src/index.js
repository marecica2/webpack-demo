import $ from 'jquery';
import bootstrap from './vendor/bootstrap.bundle.js';
import {App, AppB} from './app.es6.js';

function component() {
  var element = document.createElement('div');
  element.innerHTML = "<h1>Hello webpack</h1>";
  return element;
}
$("div.container").html(component());

$(document).ready(function () {
  console.log("som ready index.js");
  console.log($("body").html());

  var app = new App("xxxx");
  console.log(app.build());

  var appB = new AppB("yyyyy");
  console.log(appB.build());
});
