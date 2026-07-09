//1.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let c = 1;
while (c <= 10){
    alert("Valor do contador: " + c);
    c++;
}

//2.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
c=10;
while (c >= 0) {
    alert("Valor do contador: " + c);
    c--;
}

//3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numMax = prompt('Digite um número para iniciar nossa contagem regressiva');
while (numMax >= 0) {
    alert('R-' + numMax);
    numMax--;
}
//4.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
numMax = prompt('Digite um número para iniciar nossa contagem progressiva')
c = 0;
while (c <= numMax) {
    alert('P-' + c);
    c++;
}