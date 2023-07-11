function primeiraFunção() {
    console.log("Hello World das Funções");
}
primeiraFunção();
/* Chamando a função, daí caso tenha que repetir, 
Repete a chamada da função;*/

function dizerNome (nome) { 
    console.log("O nome é: " + nome);
}
/* Nome é o parametro, é o que sempre vai mudar*/
dizerNome("Isabelle");
dizerNome("Nogueira");
dizerNome("Fonseca");

var nomedoBancodeDados = "João";
dizerNome(nomedoBancodeDados);
/* Fazer pesquisas no Banco de Dados*/

function soma(a,b){
    var soma = a + b;
    return soma;
} //Retorno

var somaUm = soma(2,5);
console.log (somaUm);

var somaDois = soma(5,5);
console.log (somaDois);
/* O return atrelado á alguma variável
retorna o valor da soma solicitado*/

console.log(soma(4,5));
/* Nesse caso o Java Script lê a função soma dentro 
daí como ele lê a função, ele imprime, no caso retorna a soma*/

