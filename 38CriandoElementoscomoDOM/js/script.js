/* Criar um elemento*/
var novoParagrafo = document.createElement("p");
/*Criar um texto no elemento*/
var texto = document.createTextNode("Este é o conteúdo do parágrafo!")
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);
/* Vou fazer com que todo o body, vire uma variável*/
var body = document.querySelector("body");

console.log(body)
/*appendChild inserir os elementos no body*/
body.appendChild(novoParagrafo);

/*Inserir o parágrafo no container*/
/*Mapiei o container -- Elemento pai*/
var container = document.getElementById("container");

console.log(container);
/*Criei o elemento que eu equeria criar */

var el = document.createElement("span");
el.appendChild(document.createTextNode("texto do span"));
/* Inseri ele no container*/

console.log(el);
container.appendChild(el);