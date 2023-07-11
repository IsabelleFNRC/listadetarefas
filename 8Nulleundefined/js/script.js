console.log(sobrenome); 
console.log(numero);
// Hoisting = Içamento 
/* Ele faz apenas com oque a variavel seja inicializada por 
nao ter sido declarada antes. 
Ela puxa todas as variaveis para o topo do código
Faz somente essa pré-inicialização  */ 
var nome = null;
console.log(nome);

nome = "Isabelle"
console.log(nome);

var sobrenome; 
/* Como eu nao atirbuivalor nenhuma ao sobrenome 
ele se autonomeou undefined,
por estar sem atribuição*/ 
console.log(sobrenome);
// Esse cara quem faz com que o undefined apareça

sobrenome = "Nogueira";

console.log(sobrenome);

var numero = 8;

