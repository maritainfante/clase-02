<!DOCTYPE html>
<html lang="es"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>
    <style>
      
      
        /* 
        cambiar la fuente 
        esto implica cambiar dos cosas
        - el @import (en línea 15)
        - la definición de font-family (en línea 20)
        */
        @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');
        html,
        body {
            margin: 0;
            padding: 3;
            font-family: 'Open Sans Condensed', sans-serif;
        }
        
        h1 {
            padding: 0 4%;
        }
        
        canvas {
            display: block;
        }
    </style>
    <title>asac ne anetnerauC </title>
</head>

<body>
    <h1><!--dejar esto vacío-->Debido al coronavirus la</h1>
    <script>
        var a = 15; //ajustar esta variable que se usa en la definción del ancho y alto de la elipse
        var b = 80; //ajustar esta variable que se usa en la definición del color
        var c;
        var nombres = {
            estudiantes: [ "Camila Azócar", "María Paz Concha", "Olga F. Vio", "Trinidad González", "Matías Hagen", "María Francisca Hepp", " María Eliana Infante", "Magdalena Labarca", "Elsa Mora", "Vanessa Müller", "Jana Müller", "Muriel Muñoz", "María Trinidad Noriega", "Rosario Olivares", "Amparo Ortúzar", "Valeria Parraguéz", "Francisco Pezoa", "Francisca Purcell", "Martina Rivas", "Pilar Saavedra", "Lisa Saez", "David Sánchez", "Cecilia Soto", "María Elisa Valdés", "Francisca Vial", "María José Villasante" ],
            profesor: "Felipe Cortez"
        }

        function setup() {
            createCanvas(windowWidth, windowHeight).position(0, 0).style('z-index', -1);
            //modificar lo siguiente para que aparezca su nombre y apellido, con consulta a la variable nombres
            document.getElementsByTagName("h1")[0].append(nombres.estudiantes[6] + " esta en cuarentena");
            //modificar el siguiente mensaje
            console.log("Quizas nos queda mucho tiempo encerrados");
        }

         function draw() {
           colorMode(HSB, 360, 100, 100);
           fill(random(b-30, b), 100, 100);
           noStroke();
           c = a * random(1, 5);
           ellipse(mouseX, mouseY, c, c);
        }

        // revisar la siguiente función entre las referencias de p5.js
        
        function windowResized() {
            createCanvas(windowWidth, windowHeight);
        }

        /*
        revisar la siguiente función entre las referencias de p5.js
        modificar para obtener otros colores
        */

           function mouseClicked() {
           if (b = 390) {
               b = 350;
           } else {
               b = 30;
           }
       }
        
        /* 

        Solo si lo deseas, y te queda tiempo antes de las 12:50 hrs. de hoy, miércoles 18 de marzo, puedes agregar avanzar un poco más allá de lo solicitado entre los comentarios de más arriba. Para ello, aprovecha:

            - el libro de Introducción a p5.js 
            - las referencias en https://p5js.org/es/reference/
        
        Yo estaré esperando un correo donde me indiques la dirección de la GitHub Page correspondiente al resultado de la modificación de este archivo, tal y como fue en el cierre de la clase-01.

        Muchas gracias
        
        */
            
    </script>


<canvas id="defaultCanvas0" class="p5Canvas" width="1350" height="1442" style="width: 675px; height: 721px; position: absolute; left: 0px; top: 0px; z-index: -1;"></canvas></body></html>