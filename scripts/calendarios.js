// check for JS
console.log("hello world!");

// check for jquery
$(function () {
  console.log("hello jquery!");
});

//esconder certos elementos
$("#changeday").hide();
$("#mood").hide();
$("#grafi").hide();

//data usada mais à frente
const dat = new Date();

//CALENDÁRIO
//criar as datas do calendário
const dates = new Date();

const renderCalendar = () => {
  dates.setDate(1);

  //ir buscar o div dos dias
  const monthDays = document.querySelector(".days");

  //vai busvar o último dia do mês
  const lastDay = new Date(
    dates.getFullYear(),
    dates.getMonth() + 1,
    0
  ).getDate();


  const prevLastDay = new Date(
    dates.getFullYear(),
    dates.getMonth(),
    0
  ).getDate();

  //ultimos dias do mês anterior
  const firstDayIndex = dates.getDay();

  const lastDayIndex = new Date(
    dates.getFullYear(),
    dates.getMonth() + 1,
    0
  ).getDay();

  //primeiros dias do mês seguinte
  const nextDays = 7 - lastDayIndex - 1;

  //criar meses
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //adicionar os elementos ao html
  document.querySelector(".date h1").innerHTML = months[dates.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();
  document.querySelector("#data").innerHTML = new Date().toDateString();

  //criar os dias
  let days = "";
  //adicionar os últimos dias do mês anterior ao inicio do calendário
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
  //fazer append de todos os dias do mês
  for (let i = 1; i <= lastDay; i++) {
    //ir buscar o dia de hoje - se o i for igual ao dia de hoje - id today
    if (
      i === new Date().getDate() &&
      dates.getMonth() === new Date().getMonth()
    ) {
      //adicionar o dia de hoje aos dias
      days += `<div id="today" class="` + i + `" >${i}</div>`;
      //senão é "normal"
    } else {
      //adicionar os outros dias
      days += `<div id="dates" class="` + i + `">${i}</div>`;
    }
  }

  //adicionar os primeiros dias do próximo mês no fim do calendário
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    //adicionar os dias ao html
    monthDays.innerHTML = days;
  }
};

//ao carregar na seta para trás anda um mês para trás
document.querySelector(".prev").addEventListener("click", () => {
  dates.setMonth(dates.getMonth() - 1);
  renderCalendar();
});
//ao carregar na seta para a frente anda um mês para a frente
document.querySelector(".next").addEventListener("click", () => {
  dates.setMonth(dates.getMonth() + 1);
  renderCalendar();
});
//criar calendário
renderCalendar();


//MOOD E HABITS
//variáveis
var sleep = 0;

var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

var bgcolor;

var dt = dat.getDate();;

//fazer setup da cor
//sem isto não possível alterar a cor mais à frente
function setup() {
  bgcolor = color(157, 167, 135);
}


//simular como funciona quando já se tem uma conta - como apareceria já com informação antes
if (localStorage.getItem('pass') == "webdesign") {

  //caso já tenha conta, para simular haver dias já "coloridos", usamos o math random para não ser uma variável estável
  //faz apenas tendo em conta o dia do mês em que vamos e não o mês todo (a não ser que seja o último dia do mês)
  const totalDays = dt;
  //um random para cada variàvel
  var doneSleep = Math.floor(Math.random() * totalDays) + 1;
  var doneWake = Math.floor(Math.random() * totalDays) + 1;
  var doneEat = Math.floor(Math.random() * totalDays) + 1;
  var doneEx = Math.floor(Math.random() * totalDays) + 1;

  //"Pintar" o fundo dos dias que correspondem aos números dados pelo random
  //feito o mesmo para cada uma das cores
  var arr = [];
  while (arr.length < doneSleep) {
    var p = Math.floor(Math.random() * totalDays) + 1;
    $("." + p).css("background-color", "rgb(157, 167, 135)")
    if (arr.indexOf(p) === -1) arr.push(p);
  }

  var arr2 = [];
  while (arr2.length < doneWake) {
    var r = Math.floor(Math.random() * totalDays) + 1;
    $("." + r).css("background-color", "rgb(228, 218, 127)")
    if (arr2.indexOf(r) === -1) arr2.push(r);
  }


  var arr3 = [];
  while (arr3.length < doneEat) {
    var q = Math.floor(Math.random() * totalDays) + 1;
    $("." + q).css("background-color", "rgb(250, 219, 161)")
    if (arr3.indexOf(q) === -1) arr3.push(q);
  }


  var arr4 = [];
  while (arr4.length < doneEx) {
    var d = Math.floor(Math.random() * totalDays) + 1;
    $("." + d).css("background-color", "rgb(245, 209, 202)")
    if (arr4.indexOf(d) === -1) arr4.push(d);
  }

  //caso já tenha a conta feita basta selecionar nas checkboxes o que foi feito hoje
  $("#changed").append('	<p><input type="checkbox" id="dc1" name="dc" value="wakeup"> Did I go to bed early?</p><br><p><input type="checkbox" id="dc2" name="dc" value="Daily challenge 2"> Did I wake up early?</p> <br><p><input type="checkbox" id="dc3" name="dc" value="Daily challenge 3"> Did I eat healthy?</p> <br><p><input type="checkbox" id="dc4" name="dc" value="Daily challenge 3"> Did I work out?</p><button id="sbmt"> Submit</button>');

  $("#sbmt").on('click', function () {

    //se a checkbox correspondente for assinalada, adiciona um (ou seja um dia) à percentagem (ex: antes - 23/30, depois - 24/30)
    if ($("#dc1").is(":checked")) {
      doneSleep = doneSleep + 1;
    }

    if ($("#dc2").is(":checked")) {
      doneWake = doneWake + 1;
    }

    if ($("#dc3").is(":checked")) {
      doneEat = doneEat + 1;
    }

    if ($("#dc4").is(":checked")) {
      doneEx = doneEx + 1;
    }

    //ao carregar no botão mostra os gráficos
    document.querySelector("#gráficos").style.opacity = "1";
    $("#changedays").hide();

    //fazer percentagem - x a dividir por y vezes 100
    function percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
    }

    //fazer append da percentagem
    //é necessário usar o math round senão apareceriam as décimas assim arredonda o número
    //cada percentagem corresponde ao total de dias em que a atividade foi realizada a dividir pelo dia de hoje
    document.querySelector("#slp").innerHTML = Math.round(percentage(doneSleep, totalDays)) + "%";
    document.querySelector("#wk").innerHTML = Math.round(percentage(doneWake, totalDays)) + "%";
    document.querySelector("#et").innerHTML = Math.round(percentage(doneEat, totalDays)) + "%";
    document.querySelector("#xx").innerHTML = Math.round(percentage(doneEx, totalDays)) + "%";


  });

} else {
  //Caso não tenha conta criada
  var dt = dat.getDate();;
  var yest = dt - 1;

  //a forma de interação ho HABIT é diferente já que não tem dados prévios o utilizador pode selecionar os dias em que realizou a atividade
  $("#changedays").append('<button id="am">When did I go to bed early?</button><button id="gr">When did I wake up early?</button><button id="ok">When did I eat healthy?</button><button id="ng">When did I work out?</button>')
  //esconder elementos
  $("#gr").hide();
  $("#ok").hide();
  $("#ng").hide();
  $("#aw").hide();

  //DIAS EDITÁVEIS
  $(".days #dates").on('click', changecolor);
  //só deixar carregar num botão depois do submit
  function changecolor() {

    //SE ESTIVER NO Habit - o sleep conta a quantidade de dias selecionados para cada percentagem
    if (sPage == "habit.html") {
      sleep = sleep + 1;
      console.log(sleep);
    }

    //o elemento carregado fica com a background color do bgcolor
    $(this).css("background-color", bgcolor);

    //dependendo do botão carregado o background fica com uma cor diferenet
    $("#ams").on('click', am);
    function am() {
      bgcolor = color(157, 167, 135);

    }

    $("#grs").on('click', gr);
    $("#am").on('click', gr);
    function gr() {
      bgcolor = color(228, 218, 127);

    }

    $("#oks").on('click', ok);
    $("#gr").on('click', ok);
    function ok() {
      bgcolor = color(250, 219, 161);

    }

    $("#ngs").on('click', ng);
    $("#ok").on('click', ng);
    function ng() {
      bgcolor = color(245, 209, 202);

    }

  }


  $("#am").on('click', am);
  function am() {
    //Passar para o próximo botão
    $("#gr").show();
    $("#am").hide();
    //Guardar a variável sleep para ser usada na percentagem
    localStorage.setItem("slp", sleep);
  }


  $("#gr").on('click', gr);
  //Passar para o próximo botão
  function gr() {
    $("#ok").show();
    $("#gr").hide();
    //Guardar a variável sleep para ser usada na percentagem
    localStorage.setItem("wakeup", sleep);
  }

  $("#ok").on('click', ok);

  function ok() {
    //Passar para o próximo botão
    $("#ng").show();
    $("#ok").hide();
    //Guardar a variável sleep para ser usada na percentagem
    localStorage.setItem("eat", sleep);
  }

  $("#ng").on('click', ng);

  function ng() {
    //Passar para o próximo botão
    $("#ng").hide();
    //Guardar a variável sleep para ser usada na percentagem
    localStorage.setItem("work", sleep);
    //mostrar gráficos com as percentagens e esconder butões
    document.querySelector("#gráficos").style.opacity = "1";
    $("#other").hide();

    //fazer a percentagem dos dias em que fez o hábito
    //total de dias do mês
    //como as pessoas neste caso podem preencher os dias que quiserem a percentagem é feita com 31 dias
    const totalDays = 31;

    //ir buscar o número ao local storage
    const dSleep = localStorage.getItem('slp');
    const dWake = localStorage.getItem("wakeup");
    const dEat = localStorage.getItem("eat");
    const dEx = localStorage.getItem("work");
    //fazer parse para aparecer como número e não texto
    const doneSleep = JSON.parse(dSleep);
    const doneWake = JSON.parse(dWake) - JSON.parse(dSleep);
    const doneEat = JSON.parse(dEat) - JSON.parse(dWake);
    const doneEx = JSON.parse(dEx) - JSON.parse(dEat);

    //função da percentagem
    function percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
    }

    //adicionar ao html a percentagem
    document.querySelector("#slp").innerHTML = Math.round(percentage(doneSleep, totalDays)) + "%";
    document.querySelector("#wk").innerHTML = Math.round(percentage(doneWake, totalDays)) + "%";
    document.querySelector("#et").innerHTML = Math.round(percentage(doneEat, totalDays)) + "%";
    document.querySelector("#xx").innerHTML = Math.round(percentage(doneEx, totalDays)) + "%";

    //guardar no local storage a percentagem
    localStorage.setItem("sleep", Math.round(percentage(doneSleep, totalDays)) + "%")
    localStorage.setItem("wakeup", Math.round(percentage(doneWake, totalDays)) + "%")
    localStorage.setItem("eats", Math.round(percentage(doneEat, totalDays)) + "%")
    localStorage.setItem("ex", Math.round(percentage(doneEx, totalDays)) + "%")

  }
}

//fazer com que o dia de hoje não seja pintado com o random inicial
$("#today").css("background-color", "white");


//MOOD
//ao carregar nos botões
$(".mood").on('click', change);
function change() {
  //esconder e mostrar elementos
  $(".container").show();
  $("#feel").hide();
  $("#mood").show();


  if (localStorage.getItem('pass') == "webdesign") {
    //se entrar com conta já feita não acontece nada
  } else {
    //se não tiver conta é possível preencher os dias com o mood respetivo
    $("#changeday").show();
  }
}

//dependedo do botão que é carregado a linha de dentro do gráfico - correspondente ao dia de hoje - dá uma cor diferente
$("#amazing").on('click', amazing);

function amazing() {
  bgcolor2 = color(157, 167, 135);
  $("#today").css("background-color", bgcolor2);
  localStorage.setItem("1", "amazing");
}

$("#great").on('click', great);

function great() {
  bgcolor2 = color(228, 218, 127);
  $("#today").css("background-color", bgcolor2);
  localStorage.setItem("1", "great");
}

$("#okay").on('click', okay);

function okay() {
  bgcolor2 = color(250, 219, 161);
  $("#today").css("background-color", bgcolor2);
  localStorage.setItem("1", "okay");
}

$("#notgreat").on('click', notgreat);

function notgreat() {
  bgcolor2 = color(245, 209, 202);
  $("#today").css("background-color", bgcolor2);
  localStorage.setItem("1", "not great");
}

//ao carregar no botão para editar o mood volta à estrutura inicial
$("#mood").on('click', moodEdit);

function moodEdit() {
  $("#feel").show();
  $("#changeday").hide();
  $("#mood").hide();
}

