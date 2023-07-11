var nome = "Isa";

if(nome == "Josy"){
    console.log ("O nome é Josy");
    /*Se ele satisfazer a primeira condição ele ja fica aqui
    mesmo e já executa*/
}else if (nome == "Isabelle"){
    console.log ("O nome é Isabelle");
    /*Else if SEMPRE ANTES DE UM ELSE.
    Se ele não satisfazer a primeira condição é uma possibilidade
    ele satisfazer a segunda!*/
}else{
    console.log ("Ela possui outro nome!");
}/*Mas se mesmo assim, ainda nao satisfez nem a primeira nem a
segunda ai ele cai no else mesmo*/
var idade = 17;

if(idade == 18){
    console.log ("Ele pode entrar na festa!");

}else if (idade>18) {
    console.log ("Ele pode entra na festa");

}else{
    console.log("Ele não pode entrar na festa!");
}
    

