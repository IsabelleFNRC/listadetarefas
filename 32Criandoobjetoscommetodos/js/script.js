let pessoa = {
    nome: "Isabelle",
    idade: 27,
    falar:function(){
        console.log("Olá Isa, tudo bem ?")//Utilizamos para fazer o return;
    },
    soma: function (a,b){
        return a + b;
    }
};
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.falar()// Aqui ele só chama, pq ali emcima ele já imprimiu o que ele quer falar

var soma = pessoa.soma(2,2) //Pedir pra pessoa somar
console.log(soma);