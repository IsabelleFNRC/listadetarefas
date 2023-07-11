//parseFloat 10.0

console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));
/* Ele trocou a String 12.999 em Number 12.999, 
podemos colocar o método ou nao colocar, no
JS não precisa.*/

//parseInt

console.log(parseInt('10'));
console.log(parseInt('10.08'));
/* De um número com dígitos decimais, 
ele considera apenas o inteiro*/

// toFixed
console.log(23.51584.toFixed(1));
/*Considera apenas uma casa após a vírgula*/

//isNaN - NOT A NUMBER;
console.log(isNaN("teste"));
console.log(isNaN(12));
console.log(isNaN("14"));
/* Para valores distintos de numeros,
ele retorna true or false, se não for numero 
retorna true, se for retorna false*/

//Max_Value e Min_Value

console.log(Number.MAX_VALUE);
//Máximo valor do JS
console.log(Number.MIN_VALUE);
//Mínimo valor do JS