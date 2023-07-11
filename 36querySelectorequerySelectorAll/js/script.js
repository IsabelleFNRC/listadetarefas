//Estamos acessando o item da classe
var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

/* Selecionando somente os itens da lista*/
var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);
//****************SEM PONTO*************

/*Aqui seria com o ponto, porque estou selecionando itens da lista, não a lista inteira.*/
var itensQuery2 = document.querySelectorAll('#lista .item');
console.log(itensQuery2);

/*Aqui nesse caso ele pega o primeiro elemento*/
var lista = document.querySelector('#lista');
console.log(lista);

var span = document.querySelector('#paragrafo span');
console.log(span);