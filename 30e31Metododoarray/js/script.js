//length
/*Número de elementos do array*/
var arr = [1,2,3,4,5];

console.log(arr.length);

//push
/* Adicionar um elemento qlq no FIM arr;*/
arr.push(6, "Qualquer coisa");
console.log(arr);

// pop
/*Remover um elemento do fim do array*/
arr.pop();
console.log(arr);

//unshift
/*Adicionar no começo do Array;*/
arr.unshift(0);
arr.unshift('teste');
console.log(arr);

//shift
/* Remove do inicio do array*/
arr.shift();

console.log(arr);

//Acessar o último elemento
console.log(arr[arr.length -1]);

//isArray
//identificar se é um array! com o metodo isArray -- tratativas
console.log (Array.isArray(5));
console.log (Array.isArray(arr));
