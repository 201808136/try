//variáveis
let phase = 0;
let zoff = 0;

var amazing;
var great;
var okay;
var notgreat;
var awful;

var bgcolor;
var bgcolor2;
var bgcolor3;
var bgcolor4;
var bgcolor5;

function setup() {
  //canvas do tamanho da janela
  createCanvas(windowWidth, windowHeight);
  //todas as cores brancas para começar - não se vê o gráfico
  //uma cor para cada dia
  bgcolor = color(157, 167, 135);
  bgcolor2 = color(255, 255, 255);
  bgcolor3 = color(255, 255, 255);
  bgcolor4 = color(255, 255, 255);
  bgcolor5 = color(255, 255, 255);
  bgcolor6 = color(255, 255, 255);
  bgcolor7 = color(255, 255, 255);
  bgcolor8 = color(255, 255, 255);

}

function draw() {
  background(255);
  //fundo transparente
  clear();
  translate(100, 100);
  strokeWeight(3);
  noFill();


  //criar o circulo com Perlin Noise 
  //cada circulo equivale um dia da última semana - quando mais para dentro mais recente (o do centro é do dia de hoje)
  beginShape();
  stroke(bgcolor2);
  //radians -- número de vértices
  //criar forma 
  //The TWO_PI is a mathematical constant with the value 6.28318530717958647693. It is twice the ratio of the circumference of a circle to its diameter.
  //TWO_PI para criar o círculo
  //The radians() function in p5.js is used to convert a given degree measurement value to its corresponding value in radians.
  for (let a = 0; a < TWO_PI; a += radians(2)) {
    //entre -1 e 1
    //definir movinhento, tamanho e número de divisões/cortes do círculo para ele se mexer
    let xoff = map(cos(a + phase), -20, 10, 20, 50);
    let yoff = map(sin(a + phase), -20, 10, 20, 50);

    //o range do Perlin Noise é entre 0 e 1 
    //usar o perlin noise o yoff, xoff e zoff para criar o movimento do círculo
    let r = map(noise(xoff, yoff, zoff), 0, 1, 0, height / 4);
    //Linear movement with sin() and cos(). Numbers between 0 and 2π (2π which angles roughly 6.28) are put into these functions and numbers between -1 and 1 are returned. These values are then scaled to produce larger movements.
    //movimento linear
    let x = r * cos(a);
    let y = r * sin(a);
    //os vértices mudam de posição e dão o movimento
    vertex(x, y);
  }
  endShape(CLOSE);

  //código igual ao anterior - mesma explicação
  beginShape();
  stroke(bgcolor3);
  //radians -- número de vértices
  //criar forma
  for (let a = 0; a < TWO_PI; a += radians(2)) {
    //entre -1 e 1
    let xoff = map(cos(a + phase), -20, 10, 20, 50);
    let yoff = map(sin(a + phase), -20, 10, 20, 50);

    //muda de tamanho de cada vez que corre
    //o range do Perlin Noise é entre 0 e 1 
    let r = map(noise(xoff, yoff, zoff), 0, 1, 40, height / 4);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  beginShape();
  stroke(bgcolor4);
  //radians -- nú mero de vértices
  //criar forma
  for (let a = 0; a < TWO_PI; a += radians(2)) {
    //entre -1 e 1
    let xoff = map(cos(a + phase), -20, 10, 20, 50);
    let yoff = map(sin(a + phase), -20, 10, 20, 50);

    //muda de tamanho de cada vez que corre
    //o range do Perlin Noise é entre 0 e 1 
    let r = map(noise(xoff, yoff, zoff), 0, 1, 80, height / 4);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  beginShape();
  stroke(bgcolor5);
  //radians -- nú mero de vértices
  //criar forma
  for (let a = 0; a < TWO_PI; a += radians(2)) {
    //entre -1 e 1
    let xoff = map(cos(a + phase), -20, 10, 20, 50);
    let yoff = map(sin(a + phase), -20, 10, 20, 50);

    //muda de tamanho de cada vez que corre
    //o range do Perlin Noise é entre 0 e 1 
    let r = map(noise(xoff, yoff, zoff), 0, 1, 120, height / 4);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  //criar o circulo com Perlin Noise
  beginShape();
  stroke(bgcolor6);
  //radians -- nú mero de vértices
  //criar forma
  for (let a = 0; a < TWO_PI; a += radians(2)) {
    //entre -1 e 1
    //definir tamanho e movinhento
    let xoff = map(cos(a + phase), -20, 10, 20, 50);
    let yoff = map(sin(a + phase), -20, 10, 20, 50);

    //muda de tamanho de cada vez que corre
    //o range do Perlin Noise é entre 0 e 1 
    let r = map(noise(xoff, yoff, zoff), 0, 1, 160, height / 4);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  //criar o circulo com Perlin Noise
  beginShape();
  stroke(bgcolor7);
  //radians -- nú mero de vértices
  //criar forma
  for (let a = 0; a < TWO_PI; a += radians(2)) {
    //entre -1 e 1
    //definir tamanho e movinhento
    let xoff = map(cos(a + phase), -20, 10, 20, 50);
    let yoff = map(sin(a + phase), -20, 10, 20, 50);

    //muda de tamanho de cada vez que corre
    //o range do Perlin Noise é entre 0 e 1 
    let r = map(noise(xoff, yoff, zoff), 0, 1, 200, height / 4);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  //criar o circulo com Perlin Noise
  beginShape();
  stroke(bgcolor8);
  //radians -- nú mero de vértices
  //criar forma
  for (let a = 0; a < TWO_PI; a += radians(2)) {
    //entre -1 e 1
    //definir tamanho e movinhento
    let xoff = map(cos(a + phase), -20, 10, 20, 50);
    let yoff = map(sin(a + phase), -20, 10, 20, 50);

    //muda de tamanho de cada vez que corre
    //o range do Perlin Noise é entre 0 e 1 
    let r = map(noise(xoff, yoff, zoff), 0, 1, 240, height / 4);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  //ao aumentar o zoff faz com que o eixo vá sendo alterado criando o movimento
  zoff += 0.01;

}


$(".mood").on('click', change);
function change() {
  //fazer com que ao voltar a mudar a cor desapareça o gráfico (ao mudar a cor para branco)
  bgcolor3 = color(255, 255, 255);
  bgcolor4 = color(255, 255, 255);
  bgcolor5 = color(255, 255, 255);
  bgcolor6 = color(255, 255, 255);
  bgcolor7 = color(255, 255, 255);
  bgcolor8 = color(255, 255, 255);

  $(".container").show();
  $("#feel").hide();
  $("#mood").show();
  $("#changedays").show();

}

//fazer com que ao voltar a mudar a cor desapareça o gráfico (ao mudar a cor para branco)
$("#mood").on('click', function () {

})
//ir buscar os ultimos 7 dias através da data de hoje
var dt = dat.getDate();;
var yest = dt - 1;
var yest2 = dt - 2;
var yest3 = dt - 3;
var yest4 = dt - 4;
var yest5 = dt - 5;
var yest6 = dt - 6;

//mudar a cor dependendo da cor dos dias anteriores (uma semana) para aparecer no gráfico
$(".mood").on('click', change);
function change() {
  //ir buscar a cor de cada dia
  let yestt = $("." + yest).css("background-color");
  let yestt2 = $("." + yest2).css("background-color");
  let yestt3 = $("." + yest3).css("background-color");
  let yestt4 = $("." + yest4).css("background-color");
  let yestt5 = $("." + yest5).css("background-color");
  let yestt6 = $("." + yest6).css("background-color");

  //ontem
  //se o background color for da cor x então o bgcolor corresponsente a esse dia é da cor x
  if (yestt == "rgb(157, 167, 135)") {
    bgcolor3 = color(157, 167, 135);
  } else if (yestt == "rgb(228, 218, 127)") {
    bgcolor3 = color(228, 218, 127);
  } else if (yestt == "rgb(245, 209, 202)") {
    bgcolor3 = color(245, 209, 202);
  } else if (yestt == "rgb(250, 219, 161)") {
    bgcolor3 = color(250, 219, 161);
  } else {
    //se não tiver fundo fica branco
    bgcolor3 = color(255, 255, 255);
  }

  //anteontem
  if (yestt2 == "rgb(157, 167, 135)") {
    bgcolor4 = color(157, 167, 135);
  } else if (yestt2 == "rgb(228, 218, 127)") {
    bgcolor4 = color(228, 218, 127);
  } else if (yestt2 == "rgb(245, 209, 202)") {
    bgcolor4 = color(245, 209, 202);
  } else if (yestt2 == "rgb(250, 219, 161)") {
    bgcolor4 = color(250, 219, 161);
  } else {
    bgcolor4 = color(255, 255, 255);
  }

  //há 3 dias atrás
  if (yestt3 == "rgb(157, 167, 135)") {
    bgcolor5 = color(157, 167, 135);
  } else if (yestt3 == "rgb(228, 218, 127)") {
    bgcolor5 = color(228, 218, 127);
  } else if (yestt3 == "rgb(245, 209, 202)") {
    bgcolor5 = color(245, 209, 202);
  } else if (yestt3 == "rgb(250, 219, 161)") {
    bgcolor5 = color(250, 219, 161);
  } else {
    bgcolor5 = color(255, 255, 255);
  }

  //há 4 dias atrás
  if (yestt4 == "rgb(157, 167, 135)") {
    bgcolor6 = color(157, 167, 135);
  } else if (yestt4 == "rgb(228, 218, 127)") {
    bgcolor6 = color(228, 218, 127);
  } else if (yestt4 == "rgb(245, 209, 202)") {
    bgcolor6 = color(245, 209, 202);
  } else if (yestt4 == "rgb(250, 219, 161)") {
    bgcolor6 = color(250, 219, 161);
  } else {
    bgcolor6 = color(255, 255, 255);
  }

  //há 5 dias atrás
  if (yestt5 == "rgb(157, 167, 135)") {
    bgcolor7 = color(157, 167, 135);
  } else if (yestt5 == "rgb(228, 218, 127)") {
    bgcolor7 = color(228, 218, 127);
  } else if (yestt5 == "rgb(245, 209, 202)") {
    bgcolor7 = color(245, 209, 202);
  } else if (yestt5 == "rgb(250, 219, 161)") {
    bgcolor7 = color(250, 219, 161);
  } else {
    bgcolor7 = color(255, 255, 255);
  }

  //há 6 dias atrás (com o hoje faz 7 - uma semana)
  if (yestt6 == "rgb(157, 167, 135)") {
    bgcolor8 = color(157, 167, 135);
  } else if (yestt6 == "rgb(228, 218, 127)") {
    bgcolor8 = color(228, 218, 127);
  } else if (yestt6 == "rgb(245, 209, 202)") {
    bgcolor8 = color(245, 209, 202);
  } else if (yestt6 == "rgb(250, 219, 161)") {
    bgcolor8 = color(250, 219, 161);
  } else {
    bgcolor8 = color(255, 255, 255);
  }

}