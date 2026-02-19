let valor1 = 50;
let valor2 = 10;

if(valor1 == valor2) {
    console.log("Os valores são iguais.");
} 
if(valor1 != valor2) {
    console.log("O valor1 é maior que o valor2.");
} else {
    console.log("O valor1 é menor!")
}

//sequencia de aavalicacao
if(valor1 > valor2) {
    console.log("O valor1 é maior que valor2.")
} else if (valor1 < valor2) {
    console.log("O valor 1 é menor que valor2.")
} else {
    console.log("Os valores são iguais.")
}

let op = 1;
switch(op) {
    case 1:
        console.log("press 1");
        break;
    case 2:
        console.log("press 2");
        break;
    case 3:
        console.log("press 3");
        break;
    default:
        console.log("press 3");
        break;
}