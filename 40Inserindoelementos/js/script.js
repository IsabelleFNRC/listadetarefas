var el = document.createElement("div");

el.classList = "div-criada";

console.log(el);

var container = document.querySelector("#container");
//colocando o elemento el dentro de container, inserindo elemento filho
container.appendChild(el);

//inserBefore - insere antes
//Quero inserir esse elemento antes da div-criada 
var el2 = document.createElement("div");

el2.classList = "div-before";
//Essa div criada esta inserida no DOM.
var el3 = document.querySelector("#container .div-criada");
console.log(el3);
/*Os parametros que esta sendo inserido e o modelo que será usado, para inserir antes dele
chama o pai, insere os parametros que será inserido, e edepois
o parametro referencia que vai ser ates ou depois*/
container.insertBefore(el2,el3);