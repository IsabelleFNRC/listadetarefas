var teste = 5;
console.log(this);// Ser referenciada ao Window, onde ela é referenciada como objeto da aplicação;

console.log(this.teste); //ou se a gente colocar somente 
console.log(teste);
/* Significa que o This está em nossas instruções, tudo que nos colocamos vai dentro do Window,
quando a gente adiciona uma variavel, ele entra direto nos nossos elementos como forma de propriedade*/

let pessoa = {
    nome: "Isabelle",
    idade: 27,
    falar:function(){
        console.log("Olá Isa, tudo bem ?")
    },
    //Um objeto criado
    dizerNome: function(){
        console.log("O meu nome é "+ this.nome);
    },// Ele dentro do objeto, conseguimos acessar uma propriedade;
    aniversario: function(){
        this.idade +=1;
    }
};
pessoa.dizerNome();
console.log (pessoa.idade);

pessoa.aniversario();
console.log(pessoa.idade);