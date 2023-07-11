// Acessando os elementos via TAG
var titulo = document.getElementsByTagName('h1')[0];
/* Ou seja, acessar o elemento pela tag com nome*/
console.log(titulo);

var lis = document.getElementsByTagName('li');

console.log(lis[3]);
/*Acessei o item 4 da lista*/

//Id
var paragrafo = document.getElementById('paragrafo');
/*Element é no singular, porque ele já espera somente 1, *isso é regra**/
console.log(paragrafo);

//CLASSE
var itensDaLista = document.getElementsByClassName('item');
/*Acessei o item da classe*/
console.log(itensDaLista);