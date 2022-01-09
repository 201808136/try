// check for JS
console.log("hello world!");

// check for jquery
$(function () {
    console.log("hello jquery!");
});

//fazer parse do elemento para ele aparecer como um número em vez de texto (1 vs "1")
var newObj = JSON.parse(localStorage.getItem('userchall'));

//PÁGINA INCIAL
//hide/show elements
$("#logs").hide();
$("#signs").hide();
$("#warn").hide();
$("#warnsign").hide();
$("#account").hide();
$("#goal").hide();
$("#news").hide();
$("#tryagain").hide();
$("#cong").hide();
$("#bgs").hide();


//quando a janela carregar
//LOGO
window.onload = function () { myFunction() };
function myFunction() {
    //fade in logo​ (js + css)
    document.querySelector("#logo").style.opacity = '1';
    //depois de 4 segundos
    setTimeout(logointro, 4000);
    function logointro() {
        //fade out do logo (js + css)
        document.querySelector("#logo").style.opacity = '0';
    }
    setTimeout(aboutchange, 8000);
    //transição (sai o logo e entra o about com o mapa topográfico - sketch.js)
    //ABOUT
    //depois de 8 segundos aparece o about (4 segundos depois do logo desaparecer para ter tempo para o fade out)
    function aboutchange() {
        //logo desaparece
        document.querySelector("#logo").style.opacity = '0';
        //aparece o retângulo branco atrás para garantir que se consegue ler sempre bem o texto
        document.querySelector("#intro").style.opacity = '1';
        //aparece o about
        document.querySelector("#about").style.opacity = '1';
    }
}

//LOGIN
//quando se carrega no botão #start muda para o login
//transição do about para o login e do sign up para o login (como é parecido - mudava apenas um elemento - usamos a mesma função para não repetir código)
$('#start').on('click', begin);
$('#lg').on('click', begin);
function begin() {
    //o div com a informação do login fica "visivel" para ser possível fazer a transição
    //foi necessário fazer hide() no inicio porque por apenas a opacidade como 0 não deixava o utilizador carregar nos botões e inputs
    $("#logs").show();
    //transição fadeout do about e do sign up (dependendo de qual estava antes visivel)
    document.querySelector("#about").style.opacity = '0';
    document.querySelector("#signs").style.opacity = '0';
    //só aparece depois de 1seg para dar tempo para a transição e não sobrepor os elementos
    setTimeout(op, 1000);
    function op() {
        //fade in do login
        document.querySelector("#logs").style.opacity = '1';
        //o about e o sign up fica escondido para não ter o problema mencionado anteriormente
        //tem de ser feito depois de um segundo para permitir fazer o fadeout
        $("#about").hide();
        $("#signs").hide();
    }
}

//SIGNUP
//ao carregar no botão vai para o sign up
$('#su').on('click', signup);

function signup() {
    //o div com a informação do signup fica "visivel" para ser possível fazer a transição
    //foi necessário fazer hide() no inicio porque por apenas a opacidade como 0 não deixava o utilizador carregar nos botões e inputs
    $("#signs").show();
    //fadeout do log in
    document.querySelector("#logs").style.opacity = '0';
    //só aparece depois de 1seg para dar tempo para a transição e não sobrepor os elementos
    setTimeout(op, 1000);
    function op() {
        //fade in do signup
        document.querySelector("#signs").style.opacity = '1';
        //o login fica escondido para não ter o problema mencionado anteriormente
        //tem de ser feito depois de um segundo para permitir fazer o fadeout
        $("#logs").hide();
    }
}


//entrar no main com conta já feita - ou seja pelo log in
$('#savelog').on('click', savename);
function savename() {
    //nomes corresponde ao que é escrito no input #user - ou seja ao username
    var nomes = $("#user").val();
    //pass corresponde ao que é escrito no input #pass - ou seja a password
    var pass = $("#password").val();
    //não deixar avançar se não tiver os inputs preenchidos
    if (nomes == "" || pass == "") {
        //aviso que não estão preenchidos os inputs todos
        $("#warn").show();
        $("#account").hide();
        //só pode entrar com o log in se tiver o nome (belma) e a pass (webdesign) - simular conta já existente
    } else if (nomes == "belma" && pass == "webdesign") {
        //mudar a página
        window.location.href = 'home.html';
        //guardar o nome e a pass no local storage
        localStorage.setItem("nome", nomes);
        localStorage.setItem("pass", pass);

    } else {
        //aviso que a conta não existe
        $("#account").show();
        $("#warn").hide();
    }
}


//entrar no main sem conta - sign up
$('#savesigns').on('click', savenname);
function savenname() {
    $("#account").show();
    //nomess corresponde ao que é escrito no input #users - ou seja ao username
    var nomess = $("#users").val();
    //passs corresponde ao que é escrito no input #passwords - ou seja a password
    var passs = $("#passwords").val();
    //mail corresponde ao que é escrito no input #emails - ou seja ao email
    var mail = $("#emails").val();
    //não deixar avançar se não tiver os inputs todos preenchidos
    if (nomess == "" || passs == "" || mail == "") {
        //aviso que não estão preenchidos os inputs todos
        $("#warnsign").show();
    } else {
        //mudar a página
        window.location.href = 'home.html';
    }
}


//PERFIL -- FALTA CAMARA
//numero de badges
//fazer o número de badges dependente da quantidade de challenges que ganharam
//ir buscar o elemento colocado no local storage
var challenges = localStorage.getItem("userchall");
//se ainda não tiver nenhum badge aparece que não tem nenhum
//se for 0 não tem nenhum
if (challenges == 0) {
    //append do texto
    $("#bdg").append('<p id="nobadge">You have no badges yet.</p>')
} else {
    //para simular a existência de uma conta o numero random dá a quantidade de badges que tem 
    //se tiver aparece o número de vezes que foi dado pelo math random
    //o loop corresponde ao numero guardado na storage, ou seja, a quantidade de badges que vai ter
    //ao fazer o loop faz o append do elemento o número de vezes do challenges
    for (let i = 0; i < challenges; i++) {
        //fazer com que o badge que aparece seja random para não ser sempre o mesmo
        //o badge muda dependendo do número random
        //ao estar dentro do loop o random vai mudando de cada vez que faz o append mudando o badge
       let rand = Math.floor(Math.random() * 2);
        if (rand == 1){
             //append do badge
            $("#bdg").append('<div id= "bg"><img  src="img/badge2.PNG" width="50" height="50" class="ball" alt="award"></div>');
        } else {
        //append do badge
        $("#bdg").append('<div id= "bg"><img  src="img/badge.PNG" width="50" height="50" class="ball" alt="award"></div>');
    }}
}


//o nome de usuário que aparece no perfil é o que foi escrito ao entrar e está no local storage
$("#name").html(localStorage.getItem('nome'));

//simular como funcionaria a entrar com uma conta já feita - ou seja já com informação na página de perfil - com o JSON
//se a pass guardada no localstorage for webdesign (ou seja ser da conta "já criada") - vai ter informação
if (localStorage.getItem('pass') == "webdesign") {
    //ir buscar a informação do localStorage usando o JSON
    let text = localStorage.getItem("userinfo");
    //fazer parse da informação do local storage
    let obj = JSON.parse(text);
    console.log('yey');
    //adicionar ao html a informação
    //ao fazer obj.x vai buscar a informação que foi guardada com essa denominação e adiciona-a ao código
    $("#aboutme").html(' <p id="birthday">Birthday | ' + obj.birthday + '</p><p id="birthday">Age | ' + obj.age + '</p><p id="location">Location | ' + obj.city + '</p><p id="education">Education | ' + obj.education + '</p>');
    //como tem uma conta já criada tem entradas no journal já feitas
    $("#journalentries").html("<div class='post' <h3>How does your favourite song make you feel?</h3> <h4 class='data'>22-10-2021</h4> <p>Happy and safe</p><hr></div><div class='post' <h3>What's your happy place?</h3> <h4 class='data'>05-08-2021</h4> <p>Home</p><hr></div><div class='post' <h3>What does your ideal day look like?</h3> <h4 class='data'>01-03-2021</h4> <p>I'd go to the beach with some friends and play card games. We would stay there till the sun sets and eat dinner on the beach</p><hr></div><span class='close'>&times;</span>");
} else { //simular como apareceria ao entrar pela primeira vez
    //caso contrário ainda não tem nada
}

//editar foto de perfil
$("#perfil").on('click', novaFoto);
function novaFoto() {
    alert("A parte de mudar a fotografia de perfil foi feita num código à parte. Caso queira testar encontra-se na pasta chamada perfil.")
};

//editar perfil
$("#change").on('click', editPrfl);
function editPrfl() {
    //mudar o html para adicionar inputs para cada elemento para o utilizador poder editar
    $("#name").html('<p>Name | <input type="text" id="userp" name="userp"></p>')
    $("#aboutme").html(' <p id="birthday">Birthday | <input type="text" id="bday" name="bday"></p><p id="birthday">Age |  <input type="text" id="age" name="age"></p><p id="location">Location |  <input type="text" id="lctn" name="lctn"></p><p id="education">Education |  <input type="text" id="educ" name="educ"></p>');
    //mudar butões
    $("#change").hide();
    $("#change").before('<button id="savep">Save</button>');
    $("#change").before('<button id="gob">Go back</button>');

    //guardar alterações
    $("#savep").on('click', savePrfl);
    function savePrfl() {
        //ir buscar o que foi escrito em cada input
        var nom = $("#userp").val();
        var bd = $("#bday").val();
        var age = $("#age").val();
        var lctn = $("#lctn").val();
        var educ = $("#educ").val();
        //alterar informação do perfil com json e os inputs do utilizador
        const userinfo = { age: age, birthday: bd, city: lctn, education: educ };
        //usar stringify para ser possível guardar a informação
        const useri = JSON.stringify(userinfo);
        //guardar informação no local storage
        localStorage.setItem("userinfo", useri);
        localStorage.setItem("nome", nom);

        //alterar informação no perfil - nome e info
        $("#name").html(nom);
        $("#aboutme").html(' <p id="birthday">Birthday | ' + bd + '</p><p id="birthday">Age | ' + age + '</p><p id="location">Location | ' + lctn + '</p><p id="education">Education | ' + educ + '</p>');
        //voltar a por os butões originais
        $("#change").show();
        $("#savep").remove();
        $("#gob").remove();
    }

    //voltar atrás
    $("#gob").on('click', backPrfl);
    function backPrfl() {
        //reload da página -- mantém a informação que estava antes
        location.reload();
    }
};

//fazer logout
$("#logout").on('click', logOut);
function logOut() {
    //mudar de página para o inicio
    window.location.href = 'index.html';
};


//CHALLENGES
//fazer submit da informação
$("#submit").on('click', addaward)
function addaward() {
    //mudar butões
    $("#chall").hide();
    $("#newS").hide();
    $("#submit").hide();
    $("#goal").show();
    //se todas as checkboxes estiverem assinaladas 
    if ($("input[type=checkbox]").length == $("input:checked").length) {
        console.log("woo");
        localStorage.setItem("badges", "yes");
        //mostra um texto e o badge a dizer que foi acrescentado um badge ao pergil
        $("#cong").show();
        $("#bgs").show();
        //acrescentar novo badge - o userchall era o que estava a ser usado anteriormente para definir a quantidade de badges, ou seja, ao adicionar um ao número acrescenta no perfil
        var badg = newObj + 1;
        //guardar no local storage para ser usado no código do perfil
        localStorage.setItem("userchall", badg);
    } else { //caso contrário - ou seja se não tiver completado todos os challenges
        localStorage.setItem("badges", "no");
        //texto a dizer para tentar de novo aparece
        $("#tryagain").show();
    }

    //refazer os resultafos 
    //trocar para os elementos que aparecem no inicio
    $("#goal").on('click', switchs)
    function switchs() {
        $("#bgs").hide();
        $("#newS").show();
        $("#chall").show();
        $("#submit").show();
        $("#goal").hide();
        $("#tryagain").hide();
        $("#cong").hide();
    }
}

//adicionar um novo challenge
//criar um array
var arrays = Array();

$("#newS").on('click', addnew);
function addnew() {
    //esconder e mostrar elementos
    $("#news").show();
    $("#newS").hide();
    //quando se clica faz a função add para adicionar um elemento ao array
    $("#add").on('click', function () {
        //adicionar elemento a um array
        //vai buscar o valor do input e adiciona-o como array[x]
        array[x] = document.querySelector("#new").value;
        //adiciona mais um ao array
        x++;
        document.querySelector("#new").value = "";
        var e = "";
        //adiciona ao "e" o elemento 
        for (var y = 0; y < array.length; y++) {
            //"e" = novo input
            e += '<p><input type="checkbox" id="dc" name="dc" value="Daily challenge 1"> ' + array[y] + '</p><br>';
        }
        //adicionar o "e" - novo challenge - à lista já existente
        //esta adição só funciona enquanto se está dentro da página
        //quando se faz refresh desaparece
        document.querySelector("#chall").innerHTML = '<p><input type="checkbox" id="dc" name="dc" value="Daily challenge 1"> I took time for self reflection.</p><br><p><input type="checkbox" id="dc" name="dc" value="Daily challenge 2"> I wrote on my journal.</p> <br><p><input type="checkbox" id="dc" name="dc" value="Daily challenge 3"> I followed my routine.</p> <br>' + e;
        $("#news").hide();
        $("#newS").show();
    });

    //caso não se queira adicionar, voltar atrás, faz reload da página e não grava
    $("#no").on('click', function () {
        location.reload();
    });
};



//JOURNAL
//variáveis
var x = 0;
var array = Array();
var modal = document.getElementById("journalentries");
var count = 0;

//ir buscar o dia de hoje
let today = new Date();
let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
//colocá-lo no html
$(".currentdate").html(date);
document.querySelector(".data").innerHTML = date;

//array das prompts para o utilizador responder
let prompts = ["How does my favourite song make me feel?", "What's my happy place?", "Describe my happiest childhood memory", "How can I celebrate myself today?", "What do I feel grateful for?", "What can I do today that I didn’t think I could do a year ago?", "How do I calm my nerves in a difficult situation?", "What does my ideal day look like?", "Where do I see myself in 6 months? A year? 5 years? 10 years?", "What does happiness mean to me?", "If I could give advice to my younger self, what would I say?", "If today was my last day, what would I do?", "If I could have any three things in the world, what would they be?", "What are 10 things I love about myself? Why?", "Who do I look up to the most? Why?", "At the end of life, what would I want to be remembered by?"];
//dá uma prompt random através do math random - o número vai até ao número de prompts que existem
let prompt = prompts[Math.floor(Math.random() * prompts.length)];
//adicionar a prompt ao html
$(".writingprompt1").html(prompt);

//receber uma nova prompt (também é possível fazer isto ao fazer refresh da página)
$("#refreshbutton").on("click", refresh);
function refresh() {
    //volta a dar uma prompt random através do math random
    let prompt = prompts[Math.floor(Math.random() * prompts.length)];
    $(".writingprompt1").html(prompt);
}

//submeter o texto
$("#submitbtn").on("click", function () {
    //mostra os as entries (já existentes e a nova)
    modal.style.display = "block";
    $("#submitbtn").hide();
    $("#refreshbutton").hide();
    $("#popup").hide();
});

//adicionar elemento ao array - feito da mesma forma que no daily challenge 
function add_element_to_array() {
    //vai buscar o valor do input
    array[x] = document.querySelector("#entry").value;
    //adiciona elemento
    x++;
    document.querySelector("#entry").value = "";
    var e = "";

    for (var y = 0; y < array.length; y++) {
        //"e" = prompt + data + input 
        e += "<div class='post' id = '" + y + "'<h3>" + prompt + "</h3> <h4 class='data'>" + date + "</h4> <p>" + array[y] + "</p><hr></div>";
    }
    //adicionar "e" ao html
    if (localStorage.getItem('pass') == "webdesign") {
        document.querySelector("#journalentries").innerHTML = e + "<div class='post' <h3>How does my favourite song make me feel?</h3> <h4 class='data'>22-10-2021</h4> <p>Happy and safe</p><hr></div><div class='post' <h3>What's my happy place?</h3> <h4 class='data'>05-08-2021</h4> <p>Home</p><hr></div><div class='post' <h3>What does my ideal day look like?</h3> <h4 class='data'>01-03-2021</h4> <p>I'd go to the beach with some friends and play card games. We would stay there till the sun sets and eat dinner on the beach</p><hr></div><span class='close'>&times;</span>";
    } else {
        document.querySelector("#journalentries").innerHTML = e + "<span class='close'>&times;</span>";

    }
    //guardar no loval storage
    localStorage.setItem("userlogs", JSON.stringify(e));
    //só funciona com o getElementsByClassName
    //fechar "janela" das entradas
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        //fechar
        modal.style.display = "none";
        $("#submitbtn").show();
        $("#refreshbutton").show();
        $("#popup").show();
    }
}

//também dá para ver as entradas ao carregar no botão - mesmo código que acima
$("#newentry").on("click", function () {
    modal.style.display = "block";
    $("#submitbtn").hide();
    $("#refreshbutton").hide();
    $("#popup").hide();
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    $("#submitbtn").show();
    $("#refreshbutton").show();
    $("#popup").show();
}

//MOOD E HABIT ESTÃO NO CALENDARIOS.JS PARA FACILITAR A ORGANIZAÇÃO
