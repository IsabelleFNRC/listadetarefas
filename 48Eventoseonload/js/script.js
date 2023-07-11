//Eventos
/*Só posso acessar o Dom, após ter carregado todo ele, 
ele não executa o title, depois de carregar, o Dom, 
porque o elemento está antes e nao faz sentido, então
para que dê de acessar depois, podemos executar.*/
//Carrega o parametro
window.onload = function(){
//O que vamos imprimir na tela
    console.log("Carregou o DOM");
//encapsulando dentro para que ele carregue depois do DOM
    var title2 = document.querySelector("#title");
//Imprimindo a varivel
    console.log(title2);
}

console.log("Carregou o JS");
//Tentou carregar antes da criação dos elementos na página
//Ele conseguiu imrpimri depois, porque encapsulou o title lá dentro,
//criando outra variavel la dentro do onload
var title = document.querySelector("#title");
//Imprimindo depois
console.log(title);