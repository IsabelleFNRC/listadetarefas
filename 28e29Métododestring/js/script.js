//Length
/* Conta quantos caracteres tem na String completa*/
var nome = "Isabelle Fátima Nogueira Rodrigues Corrêa Fonseca";

console.log(nome.length);

var obj = "bola";
//Isso vale para qlq String, ele conta as Strings

console.log(obj.length);

//indexOf

console.log(nome[2]); 
/* Ele identifica o caracter nessa coordenada, lembrando que é 0,1,2*/

var frase = "Isabelle Fátima Nogueira Rodrigues Corrêa Fonseca";

console.log(frase.indexOf("Fonseca"));

//Slice
/* Seria para remover a frase, ele retira parte da frase, no caso a parte que voce coloca no ()*/
var Fonseca = frase.slice(42,49);

console.log(Fonseca);

//Replace
/* Método para trocar palavras*/
var novaFrase = frase.replace ("Fonseca","teste");
console.log(novaFrase);

//toLowerCase e toUpperCase

var frase = "Esta é a farse que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();
/*Colocar tudo no maiusculo e tudo no minusculo*/
console.log(fraseCaixaAlta);
console.log(fraseCaixaAlta.toLowerCase());

//trim
var nome = "             Isa           ";

var nomeTrim = nome.trim();// parâmetro
// Ele tira os espaços da String que foi declarada
console.log(nome);
console.log(nomeTrim);

//split
// Transformar essas tags em String para inserir no banco;
console.log(frase.split(" "));
var tags = "PHP, JAVA SCRIPT, HMTL, CSS";

console.log(tags.split(","));

//lastIndexOf
/*Procurar a palavra pelo indice, posso saber o índice da 1° palavra teste
ou da ultima palavra teste*/
var fraseDois = "Eu quero a última palavra teste dessa frase teste";
console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));


 
