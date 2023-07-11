/*Retirar o elemento filho */
//A div fica no HTML, mas o filho some
var container = document.querySelector("#container");
var p = document.querySelector("#container p");
container.removeChild(p);

//Removendo o Elemento em si
var subtitle = document.querySelector(".subtitle");

subtitle.remove();