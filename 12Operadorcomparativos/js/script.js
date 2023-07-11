var idade = 17;
var PossuiCarro = 1;
/* no exemplo do carro fica claro que quando for igual
á 0 sempre sera considerado false, portanto nao entra
no if, mas se for igual á 1 ele é considerado true 
entrando assim no if*/

if(idade>=18){
    console.log("O usuário pode tirar a carteira");
}
if(idade<18){
    console.log("O usuário não pode tirar a carteira");
}
if(PossuiCarro){
    console.log("O usuário já pode andar de carro");
}
var nome = "Isabelle";

if(nome == "Isabelle"){
    console.log("O seu nome é Isabelle Nogueira");
}
if(nome != "Isabelle"){
    console.log("O seu nome não é Isabelle");
}

if(20>100){
    console.log("Passou");
}
if(100>20){
    console.log("Passou");
}