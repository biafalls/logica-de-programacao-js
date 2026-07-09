//1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
let altura = prompt('Digite sua altura em metros');
let peso = prompt('Digite seu peso em quilogramas');;
function calcularIMC(altura, peso){
    let imc = peso / (altura * altura);
    return imc;
}
alert(`Seu imc é: ` + calcularIMC(altura, peso).toFixed(2));

//2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if(numero === 1 || numero === 0 )
        return 1;

    let fatorial = 1;
    for(let c = 2; c <=numero; c++){
        fatorial *= c;
    }
    return fatorial;
}

let numero = prompt('Digite um número');
let resultado = calcularFatorial(numero);
alert(`Fatorial de ${numero} é ${resultado}`);

//3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarparaReais(valorDolar) {
    let cotacao = 4.80;
    return valorDolar * 4.80;
}

alert(converterDolarparaReais(100));

//4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    alert(`A área da sala retangular é ${area} m² e seu perímetro é ${perimetro} m`);
}
areaPerimetroSalaRetangular(4,7);

//5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaPerimetroSalaCircular(raio) {
    let area = 2 * 3.14 * raio;
    let perimetro = 3.14 * raio * raio;

    alert(`A área da sala circular é ${area} m² e seu perímetro é ${perimetro} m`);
}
areaPerimetroSalaCircular(4);

//6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    for(let i =1; i<= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado} `);
    }
}

tabuada(5);
