//setTimeout
/*Para que o timer funcione, preciso transformar esse parametro em uma variavel
Esses seriam os métodos de parada do setTimeout., alem de parar ele limpa*/

var x = 0;
// Transformo o parâmetro em variável, para conseguir fazer um if nele
var myTimer = setTimeout(function(){
//A frase que será impressa na execução do parâmetro
    console.log("O x é 0");
//Em qual período de tempo? 1,5seg
}, 1500);
/*Para que o método entre no if, atribui
valor de x maior que 0*/ 
x = 5;
// Para aplicar o clear, como parada
if(x > 0){
//Inseri o parametro para a variavel
    clearTimeout(myTimer);
//Imprimi na tela!
    console.log("O x passou de 0");
}
//Declarei um parametro como variavel para ela entrar no if
var myInterval = setInterval(function(){
//Imprimir a frase do parâmetro
    console.log("Imprimindo Interval");
//Definicndo o tempo que que irá ser executado
}, 500);
//Aplicando o parametro de parada
setTimeout(function(){
//Imprimindo a frase mostrando o parametro
    console.log("Não precisamos mais repetir!");
//Parando o parametro 
    clearInterval(myInterval);
//Definindo o tempo
}, 1500);

