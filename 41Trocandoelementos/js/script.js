// Criar um elemento;
var el = document.createElement("h3");
//Criando uma classe para o novo elemento;
el.classList = "testando-classe";
//Criando texto ao elemento;
var texto = document.createTextNode("Este é o texto do h3");
//Adicionar texto ao elemento
el.appendChild(texto);
//Imprime no HTML
console.log(el);

//Escolho o elemento que eu quero trocar, no caso é h1
//QuerySelector é um seletor de variavel;
var title = document.querySelector("#title");
//Vai aparecer no DOM
console.log(title);
//Selecionar o pai do el, o pai será o body;
var body = document.querySelector("body");

//Trocar os elementos
//Chamo o pai, dai eu coloco o novo elemento, o antigo que será trocado;
body.replaceChild(el,title)

/*
Caso eu queira selecionar um pai que eu nao saiba, puxo um geral,
independente de quem for o Pai

//Selecionar o pai do el, o pai será o body;
var pai = title.parentNode;

//Trocar os elementos
//Chamo o pai, dai eu coloco o novo elemento, o antigo que será trocado;
pai.replaceChild(el,title);
*/