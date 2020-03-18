<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>
    <style>

    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
html, body { margin: 0; padding: 0; font-family: 'Anton', sans-serif;}
canvas { display: block;}

    </style>
    <title>MI SEGUNDA PÁGINA</title>
  </head>
  <body>
      <h1>Eliana Infante</h1>
      <script>

      var a = 50;
var c;
function setup() {
createCanvas(windowWidth,windowHeight);
  document.getElementsByTagName("h1")[0].append(" en cuarentena");
}

function draw() {
//color RGB
colorMode(HSB,360,100,100);
//background(0,100,100);
fill(random(0,360),100,100);
noStroke();
c = a * random(1,5)
ellipse(mouseX,mouseY,c,c);
}

      </script>
  </body>
</html>
