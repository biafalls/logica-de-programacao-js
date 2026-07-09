//1. Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundo() {
    console.log('Olá, mundo!');
}
exibirOlaMundo();

//2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirOlaNome('Adriana');

//3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let dobro = calcularDobro(10);
function calcularDobro(numero) {
    return numero * 2;
}
console.log('Dobro: ', dobro);

//4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
let media = mediaDeTresNumeros(5, 5, 5);
function mediaDeTresNumeros(num1, num2, num3) {
    return (num1+num2+num3)/3;
}
console.log('Média: ', media);

//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
let maior = retornaMaiorEntreDois(40, 30);
function retornaMaiorEntreDois(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log('Maior: ', maior);

//6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
let resultado =  quadrado(5);
function quadrado(numero) {
    return numero * numero;
}
console.log('Quadrado: ', resultado);

