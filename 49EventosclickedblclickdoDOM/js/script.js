//Adicionando um incentivador do click para o usuário, encapsulando em uma variável
var btn = document.querySelector("#btn");
//Imprimir o botão
console.log(btn);
//Adicionar o evento de click e uma callback
btn.addEventListener("click", function(){
//Imprimir o que vai acontecer depois do evento e aqui também coloca o 
    console.log("Clicou!")
//O this toda vez que solicitado, está se referindo á ele mesmo, ao evento
    console.log(this);
//Podemos alterar o estilo do botão tbm
    this.style.color = "red";
});
//Click afetando outros elementos
//Escolhendo um elemento que já existe 
var title = document.querySelector("#title");
//Adcionando o evento ao elemento
title.addEventListener("click", function(){
//O que será impresso quando você clicar
    console.log("Clicado");
//Chamando o subtitulo
//Adicionando outro evento, após ele ser clicado
    var subtitle = document.querySelector(".subtitle");
//O evento de clicar no titulo e sumir o subtitulo
    subtitle.style.display = "none";

});
//Double click
//Chama e seleciona o elemento que já existe
var subtitle = document.querySelector(".subtitle");
//adiciona o evento ao elemento
subtitle.addEventListener("dblclick", function(){
//Qunado clicar ele vai imprimir no DOM 
console.log("click duplo!");
})