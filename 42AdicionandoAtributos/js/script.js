//Adicionar atributo de método, não via classe;
//Seleciona o método que voce quer adicionar; 
var title = document.querySelector("#title");
//selecionao método e coloca o atributo 
title.setAttribute("class", "testando-atributo");
//Imprimindo o método no DOM
console.log(title);

//Selecionar esse botão
var btn = document.querySelector("#btn");
//Agora vou desativar o botão
btn.setAttribute("disabled","disabled")
//Esse segundo disabled, é o valor que diz que ele está desabiitado mesmo
//Adicionar um titulo agora
var subtitle = document.querySelector(".subtitle");
//selecionar o método e colocar o atributo
subtitle.setAttribute("id","Titulo-2");

//Tudo que é atributo eu posso selecionar e adicionar no DOM
//Removendo Atributo
//Seleciono a lista primeiro, daí uso query Selector
var lista = document.querySelector("#lista");
//Removendo o id 
lista.remove();

//O removeAtributte ele remove algo em especifico, mas nao consegui fazer
//mas o remove, remove tudo