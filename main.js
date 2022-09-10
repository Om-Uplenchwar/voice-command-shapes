x = 0;
y = 0;
draw_circle = "";
draw_rectangle = "";
draw_triangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function setup() {
    canvas = createCanvas(900, 600);
}

function start() {
    document.getElementById("status").innerHTML = "System is listning, please speak";
    recognition.start();    
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognised as : " + content;
    if(content == "circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle ";
        draw_circle = "set";
    }

    if(content == "rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle ";
        draw_rectangle = "set";
    }

    if(content == "Triangle")
    {
        x1 = Math.floor(Math.random() * 900);
        y1= Math.floor(Math.random() * 600);
        x2 = Math.floor(Math.random() * 900);
        y2= Math.floor(Math.random() * 600);
        x3 = Math.floor(Math.random() * 900);
        y3= Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing triangle ";
        draw_triangle = "set";
    }
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is been drawn. ";
        draw_circle = "";
    }

    if(draw_rectangle == "set")
    {
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Rectangle is been drawn. ";
        draw_rectangle = "";
    }

    if(draw_triangle == "set")
    {
        triangle(x1, y1, x2, y2, x3, y3);
        document.getElementById("status").innerHTML = "Triangle is been drawn. ";
        draw_triangle = "";
    }
}