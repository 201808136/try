var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

//se a página for o index.html aparece o mapa topográfico
//if(sPage == "index.html"){

//INDEX 
let hMap = [];

//res e thresh controlam a velocidade e quantidade de "linhas" 
let res = 9;
let thresh = 2;
//t começa como 0 para ir aumentando e criando o movimento
let t = 0;
move = true;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(255);
  if (move) {
    //loop com a altura e largura para criar a forma
        //array de posições na horizontal
    for (let i = 0; i < 1 + width / res; i++) {
      hMap[i] = [];
      for (let j = 0; j < 1 + height / res; j++) {
        //remapeia um número de um intervalo para outro
        hMap[i][j] = noise((i + t / 5) / 100, (j + sin(t / 10)) / 100, t / 600) * 100;
      }
    }
    stroke(255);
    //faz com que os elementos mexam ao ir aumentando (como "frames")
    t += 1;
  }



  for (let i = 0; i < 1 + width / res; i++) {
    for (let j = 0; j < 1 + height / res; j++) {
      //
      if (i < width / res && j < height / res) {
        //calcula o valor interno mais próximo que é menor ou igual ao valor do parâmetro
        let a = floor(hMap[i][j] / thresh);
        let b = floor(hMap[i + 1][j] / thresh);
        let c = floor(hMap[i][j + 1] / thresh);
        let d = floor(hMap[i + 1][j + 1] / thresh);

        //criar os pontos
        let ab = 0;
        let ac = 0;
        let bcx = 0;
        let bcy = 0;
        let bd = 0;
        let cd = 0;
        let height = 0;

        //fazer com que os pontos se mexam no "mapa" dependendo do res
        if (a != b) {
          let contourValue = thresh * max(a, b);
          height = contourValue;
          let diff = abs(hMap[i][j] - hMap[i + 1][j]);
          let add = abs(hMap[i][j] - contourValue);
          ab = i * res + res * add / diff;
        }

        if (a != c) {
          let contourValue = thresh * max(a, c);
          height = contourValue;

          let diff = abs(hMap[i][j] - hMap[i][j + 1]);
          let add = abs(hMap[i][j] - contourValue);
          ac = j * res + res * add / diff;
        }

        if (c != d) {
          let contourValue = thresh * max(c, d);
          height = contourValue;

          let diff = abs(hMap[i][j + 1] - hMap[i + 1][j + 1]);
          let add = abs(hMap[i][j + 1] - contourValue);
          cd = i * res + res * add / diff;
        }

        if (b != c) {
          let contourValue = thresh * max(b, c);
          height = contourValue;

          let diff = abs(hMap[i + 1][j] - hMap[i][j + 1]);
          let add = abs(hMap[i + 1][j] - contourValue);
          bcx = (i + 1) * res - res * add / diff;
          bcy = j * res + res * add / diff;
        }

        if (b != d) {
          let contourValue = thresh * max(b, d);
          height = contourValue;

          let diff = abs(hMap[i + 1][j] - hMap[i + 1][j + 1]);
          let add = abs(hMap[i + 1][j] - contourValue);
          bd = j * res + res * add / diff;
        }

        //transição (sai o logo e entra o about com o mapa topográfico)
        if (millis() > 8000) {
          stroke(200);

        }
        strokeWeight(1)
          //mudança no strokeWeight
        if (height % 9 == 0) {
          strokeWeight(2)
        }


//criar as linhas através dos pontos
        if (ab) {
          if (ac) {
            line(ab, j * res, i * res, ac);
          }
          if (bcx || bcy) {

            line(ab, j * res, bcx, bcy);
          }
        } else if (ac) {
          if (bcx || bcy) {

            line(i * res, ac, bcx, bcy);
          }
        }

        if (cd) {
          if (bd) {

            line(cd, (j + 1) * res, (i + 1) * res, bd);
          }
          if (bcx || bcy) {

            line(cd, (j + 1) * res, bcx, bcy);
          }
        } else if (bd) {
          if (bcx || bcy) {

            line((i + 1) * res, bd, bcx, bcy);
          }
        }


      }

    }
  }
}