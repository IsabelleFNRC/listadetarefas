var x = 1;

var y = 3;

console.log(x, y);

function teste(){
    
    var z = 0;

    console.log(z);// é local, portanto não sai de função.
    console.log(x); // Como é global eu consigo acessar ela no local.

}
teste();// Não se esqueça de chamar a variavel.

function testando(){
    var z = 3;
    console.log(z); // Não se mistura com o outro escopo local.
}
testando();