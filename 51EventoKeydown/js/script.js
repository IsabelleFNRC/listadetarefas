//Keydown
/*Esse evento toda vez que eu aperto uma tecla ele mapeia pra mim 
somente com key, se quiser selecionar apenas uma tecla
mas se ele fica apertado, tbm mapeia as vezes que fica pressionado*/
//Adiciono o evento  
document.addEventListener("keydown", function(event){
//Seleciono a atecla que ocorrera o evento
    if(event.key === "Enter"){
//Imprimo no DOM a frase qu vou colocar quando apertar
        console.log("Apertou o enter")
    }
});
//Keyup
/*Esse evento toda vez que eu SOLTO uma tecla ele mapeia pra mim 
somente com key, se quiser selecionar apenas uma tecla
mas se ele fica apertado, NAO DA  NADA pq esse e o evento de solta*/
//Adiciono o evento 
document.addEventListener("keyup", function(event){
//Seleciono a atecla que ocorrera o evento
    if(event.key === "Enter"){
//Imprimo no DOM a frase qu vou colocar quando soltar
        console.log("Soltou o enter")
    }
});
