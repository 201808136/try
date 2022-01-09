//check js
console.log("hello world json!");

// check for jquery
$(function () {
    console.log("hello jquery json!");
});


//OPÇÃO 1
//se se entrar pelo log in guarda x informação
$('#savelog').on('click', savename);
function savename() {
    console.log("hello ok!");
    //ir buscar o texto que foi escrito nos inputs - username e pass
    var nomes = $("#user").val();
    var passs = $("#password").val();
    //gravar inputs no localStorage
    localStorage.setItem("nome", nomes);
    localStorage.setItem("pass", passs);
    //usar json para guardar a informação sobre a conta
    //o json permite criar "divisões" ao dar nome a cada informação e depois ir buscar apenas aquela parte - ex: age:"21"
    const userinfo = { age: "21", birthday: "01-01-2000", city: "Porto", education: "FBAUP" };
    //fazer stringigy para guardar no local storage
    const useri = JSON.stringify(userinfo);
    localStorage.setItem("userinfo", useri);
    //dar um número random até 4 e guardar no local storage para ser usado no perfil
    localStorage.setItem("userchall", Math.floor(Math.random() * 4));
}


//OPÇÃO2
//se se entrar pelo sign up - sem conta já feita
$('#savesigns').on('click', savenewname);
function savenewname() {
    //ir buscar o texto que foi escrito nos inputs
    var nome = $("#users").val();
    var passs = $("#passwords").val();
    var mail = $("#emails").val();
    //gravar inputs no localStorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("pass", passs);
    localStorage.setItem("mail", mail);
    localStorage.setItem("userchall", 0);
}

//mais json é usado ao longo do código, contudo não fazia sentido separá-lo e repetir o mesmo código em dois ficheiros diferentes
//por isso deixamos junto com o resto

