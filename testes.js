const padrao = /abc/;
const padraoComAsterisco = /ab*c/;
const padraoFronteira = /brilha\b/;
const padraoInicioTexto = /^T/;
const padraoFinalTexto = /r$/;


function padroesSimples(texto) {
    console.log(texto.search(padrao));
}

function comAsterisco(texto) {
    console.log(texto + ":" + texto.search(padraoComAsterisco));
}

function fronteiraDeCaracter(texto) {
    console.log(texto + ": " + texto.search(padraoFronteira));
}

function inicioDoTexto(texto) {
    console.log(texto + ": " + texto.search(padraoInicioTexto));
}

function finalDoTexto(texto) {
    console.log(texto + ": " + texto.search(padraoFinalTexto));
}

const padraoNaoGuloso = /a?bc?/;
function naoGuloso(texto) {
    console.log(texto + ": " + texto.search(padraoNaoGuloso));
}

const padraoCorrespondencia = /(foo) (bar)/;
function correspondencia(texto) {
    console.log(texto + ": " + texto.search(padraoCorrespondencia));
}
//correspondencia("Daniel bar foo bar");

//padroesSimples("Todos os aviões são derivados do Slabcraft!");

//comAsterisco("uioabbbbcjha");
//comAsterisco("uioacjha");
//comAsterisco("abcjha");
//comAsterisco("ahcgesgdhtds");

//fronteiraDeCaracter("Tá vendo aquela lua que brilha lá no céu!");
//fronteiraDeCaracter("Tá vendo a lua, _brilha!");

//inicioDoTexto("Tá vendo aquela lua que brilha lá no céu!");

//finalDoTexto("Corre");
//finalDoTexto("Correr");

//naoGuloso("sssbsss");
//naoGuloso("Daniel");
//naoGuloso("Sabado");

//const padraoGrupos = /(?:<h1>)([\w\s]+)(<\/h1>)/;
const padraoGrupos = /(?:<(h[1-6])>)([\w\s]+)(?:<\/\1>)/;
function grupos(texto) {
    let arrayFounded = padraoGrupos.exec(texto);
    if (arrayFounded) {
        for(grupo = 0; grupo < arrayFounded.length; grupo++) {
            console.log("grupo " + grupo + ": " + arrayFounded[grupo]);
        }
    } else {
        console.log("Tá nulo");
    }
    //console.log(texto + ": " + arrayFounded);
}
/* grupos("<h1>Daniel Moraes 1</h1>");
grupos("<h2>Daniel Moraes Incorreto</h3>");
grupos("<h6>Daniel Moraes 6</h6>"); */

const padraoCEP = /([0-9])([0-9])(\1)/g;
function validarCEP(cep) {
    let result = cep.match(padraoCEP);
    if (result) {
        console.log(result);
    } else {
        console.log("CEP válido!");
    }

    if ((cep < 10000) || (cep > 999999)) {
        console.log("Este CEP é inválido");
    }
}
//validarCEP("606045");
validarCEP("123456");