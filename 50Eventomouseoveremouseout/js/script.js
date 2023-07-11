//Evento de mouseover
//Selecionou o elemento que ocorrerá esse evento

var title = document.querySelector("#title");
//Aplicou o evento, que é quando o mouse clicar 
title.addEventListener("mouseover", function(){
//O que vai acontecer qund colocar o mouse de cima, no caso o fundo ficar rosa
    this.style.backgroundColor = "pink";
});

//Evento mouseout
//Adicionou o Evento direto já que já tinha o elemento selecionado
title.addEventListener("mouseout",function(){
//O que vai acontecer quando tirar o mouse de cima, no caso o fundo ficar branco
    this.style.backgroundColor = "white";
});
//Afetar outro elemento co o mouseover
//Como já coloquei no index, ele já aparece no DOM

//Selecionar o elemento que terá o evento
var subtitle = document.querySelector(".subtitle")
/*Adicionar o evento que ocorrera com o elemento, 
Nesse caso quando passar o mouse em cima do sutitle, vai aparecer uma mensagem embaixo, a mensagem fica*/
subtitle.addEventListener("mouseover", function(){
//Adiciona no DOM a legenda, a frase que vai aparecer
    var legenda = document.querySelector("#legenda");
//Ele remove a classe de hide E aparece no HTML
    legenda.classList.remove("hide");
});
//Adciciona o evento no elemento, que no caso quanto tirar  mouse do subtitle ele desaparece tbm
subtitle.addEventListener("mouseout", function(){
//Adiciona o que ira desaparecer
    var legenda = document.querySelector("#legenda");
//Como faz isso? Adicionando o hide de volta 
    legenda.classList.add("hide");
});