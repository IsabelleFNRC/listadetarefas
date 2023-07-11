//Propridades do document
//Tenho acesso á todo o body da página
console.log(document.body);
//Acesso ao head da página
console.log(document.head);
//Acesso á todo os links da página, uma colection com os links
console.log(document.links);
//Alterar os links, no cso eu seleciono e coloco o que eu quero;
document.links[0].textContent = "Twitter";
//Receber a URL da página;
console.log(document.URL);
//Imprimir no DOM o título da página 
console.log(document.title);
//Trocando o title e imprimindo ele no DOM
document.title = "Aula 43";

console.log(document.title);