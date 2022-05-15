$(document).ready(function () {
  "use strict";

  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));




  let rectangle = Shape.Rectangle(0, 0, 1000, 600);
  rectangle.fillColor = "#006A4E";



  let circle = Shape.Circle(450, 300, 200);
  circle.fillColor = "#F42A41";
  paper.view.draw();



});
