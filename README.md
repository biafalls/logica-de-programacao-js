# 💻 Lógica de Programação: Mergulhe em Programação com JavaScript

Este repositório foi criado para documentar meus estudos, anotações e códigos desenvolvidos no meu primeiro curso de formação. O objetivo principal foi compreender a base da construção de softwares e aplicar esses conceitos na prática utilizando JavaScript.

---

## 📖 Conceitos Fundamentais

### 📑 O que é Lógica de Programação?
A lógica de programação é a organização coerente de uma sequência de instruções necessárias para resolver um problema ou executar uma tarefa. É a forma como pensamos e estruturamos os passos que o computador deve seguir, funcionando como uma "receita de bolo" onde a ordem das ações altera diretamente o resultado final.

### 🔤 O que é uma Linguagem de Programação?
É um conjunto de regras sintáticas e semânticas que permite a um ser humano se comunicar com um computador. Através dela, traduzimos a nossa lógica de programação em instruções que a máquina consegue processar e executar.

### 💛 Linguagem JavaScript
O JavaScript (JS) é uma das linguagens de programação mais populares do mundo. Originalmente criada para criar interatividade em páginas web no lado do cliente (navegador), hoje ela é extremamente versátil, sendo utilizada tanto no Front-End quanto no Back-End (Node.js), desenvolvimento de aplicativos móveis e muito mais.

---

## 🛠️ Comandos e Sintaxe Básica em JavaScript

### 📢 Interação e Depuração
* `let nomeVariavel;`: Utilizado para declarar uma variável, que é um espaço na memória do computador para armazenar dados que podem mudar durante a execução do programa.
* `alert();`: Exibe uma caixa de diálogo com uma mensagem de alerta na tela do navegador para o usuário.
* `prompt();`: Abre uma caixa de entrada de texto, permitindo que o usuário digite um dado que pode ser capturado pelo programa.
* `console.log();`: Ferramenta essencial de **depuração (debugging)**. Ela não aparece para o usuário comum; serve para o desenvolvedor exibir dados, testar variáveis e acompanhar o fluxo do código através do console do navegador (F12).

### 🧵 Template Strings e Concatenações
Para juntar textos com variáveis, podemos usar duas abordagens principais:
* **Concatenação tradicional:** Usa o operador `+`. 
    ```javascript
    let nome = "Bia";
    console.log("Olá, " + nome + "!");
    ```
* **Template Strings:** Uma forma mais moderna e legível. Utiliza crases (`` ` ``) e envolve as variáveis com `${}`.
    ```javascript
    let nome = "Bia";
    console.log(`Olá, ${nome}!`);
    ```

---

## 🔄 Estruturas de Controle e Fluxo

### 🔀 Condicionais: If, Else e Else If
Permitem que o programa tome caminhos diferentes baseando-se em condições (verdadeiro ou falso).
```javascript
let idade = prompt('Digite sua idade');

if (idade < 18 && idade > 0){
    console.log('Você é menor de idade');
} else if (idade >= 18 && idade <= 100){
    console.log('Você é maior de idade');
} else{
    console.log('Idade inválida');
}
```

### 🔁 Repetições: While e o comando Break
O `while` cria um laço de repetição (loop) que executa um bloco de código enquanto uma condição específica for verdadeira. Já o `break;` é um comando utilizado para interromper e sair imediatamente desse laço, mesmo que a condição do loop ainda seja verdadeira.

```javascript
let contador = 1;

while (contador <= 10) {
    if (contador === 5) {
        break; // Interrompe o loop quando chegar em 5
    }
    console.log(contador);
    contador++;
}
```

### 🧠 Operadores Lógicos
São utilizados para combinar ou inverter condições booleanas dentro das nossas estruturas condicionais:

* `&&` (E / AND): Retorna verdadeiro apenas se **todas** as condições forem verdadeiras.
* `||` (OU / OR): Retorna verdadeiro se **pelo menos uma** das condições for verdadeira.
* `!` (NÃO / NOT): Inverte o valor lógico (o que é verdadeiro vira falso e vice-versa).

### ⚡ Operador Ternário
Uma forma simplificada e compacta de escrever uma estrutura `if / else` em apenas uma linha. É ideal para atribuições diretas de valores baseadas em uma condição específica.

```javascript
let idadeExemplo = 18;
let status = idadeExemplo >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);
```

## 🎲 Recursos Adicionais

### 🎰 Math.random()
É uma função nativa do JavaScript que gera um número pseudo-aleatório de ponto flutuante (com casas decimais) que varia de `0` (inclusivo) até quase `1` (exclusivo). Muito utilizada combinada com `Math.floor()` para gerar números inteiros aleatórios em jogos e sorteios.

```javascript
// Gera um número inteiro aleatório entre 1 e 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
```
---
---
# 💻 Lógica de Programação: Explore Funções e Listas

Este guia prático foi desenvolvido para consolidar os conceitos essenciais de manipulação do DOM (Document Object Model), trabalho com funções de diversos tipos, manipulação de arrays (listas) e integração de recursos externos como síntese de voz.

---

## 1. Manipulação do DOM e Elementos HTML

O DOM é a representação estruturada do seu documento HTML que permite ao JavaScript interagir com as páginas web, alterando textos, estilos e comportamentos.

### `document.querySelector()`
O método `querySelector` permite selecionar o **primeiro** elemento da página que corresponde a um seletor CSS específico (como um nome de tag, uma classe ou um ID).

```javascript
// Selecionando por tag
let titulo = document.querySelector('h1');

// Selecionando por classe
let paragrafo = document.querySelector('.texto-destaque');

// Selecionando por ID
let botaoEspecial = document.querySelector('#btn-enviar');
```

### `document.getElementById()`
Diferente do `querySelector`, o `getElementById` é uma forma mais direta e performática de selecionar um elemento quando você já sabe o seu id único. Não é necessário utilizar a hashtag (#).

```javaScript
// Selecionando o elemento <div id="resultado"></div>
let areaResultado = document.getElementById('resultado');
```

### `.innerHTML` vs `.value`
Ambas são propriedades usadas para acessar ou modificar o conteúdo de elementos, mas aplicam-se a cenários totalmente diferentes:

* `.innerHTML`: Utilizado para ler ou alterar o conteúdo interno de texto e tags de um elemento (como `<h1>`, `<p>`, `<div>`).
* `.value`: Utilizado especificamente para ler ou alterar o valor inserido dentro de campos de entrada de dados (como `<input>`, `<textarea>`, `<select>`).

```javaScript
// Alterando o texto de um título na página
document.querySelector('h1').innerHTML = 'Bem-vindo ao Jogo!';

// Capturando o que o usuário digitou em um campo de texto
let chute = document.querySelector('input').value;
```

### 2. Eventos e Interatividade
O evento `onclick` serve para acionar uma função JavaScript no momento exato em que o usuário clica em um elemento HTML (geralmente um `<button>`).

No HTML:

```html
<button onclick="verificarChute()">Enviar Chute</button>
```

No JavaScript:

```javaScript
function verificarChute() {
    console.log('O botão foi clicado e a função executada!');
}
```

### `setAttribute` e `removeAttribute`
Estes métodos permitem modificar os atributos de tags HTML dinamicamente (como desabilitar um botão, alterar a imagem de um elemento, mudar links, etc.).

* `setAttribute(atributo, valor)`: Adiciona ou modifica o valor de um atributo.
* `removeAttribute(atributo)`: Remove completamente um atributo do elemento.

```javaScript
let botaoReiniciar = document.querySelector('#reiniciar');

// Desabilitando o botão adicionando o atributo HTML 'disabled'
botaoReiniciar.setAttribute('disabled', 'true');

// Habilitando o botão novamente removendo o atributo 'disabled'
botaoReiniciar.removeAttribute('disabled');
```

## 3. Mergulhando em Funções
Funções são blocos de código reaproveitáveis que executam tarefas específicas.

### Função sem parâmetro e sem retorno
Apenas executa um bloco de comandos quando chamada, sem precisar de informações externas e sem devolver dados para quem a chamou.

```javaScript
function exibirMensagemInicial() {
    document.querySelector('p').innerHTML = 'Escolha um número entre 1 e 10';
}
// Chamada da função:
exibirMensagemInicial();
```

### Função com parâmetro e sem retorno
Recebe dados externos (variáveis ou valores) para dentro do seu escopo, permitindo que o comportamento mude dinamicamente com base no que foi enviado.

```JavaScript
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// Chamada da função enviando argumentos:
exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Tente adivinhar o número!');
```

### Função com parâmetro e com retorno
Além de receber dados, realiza um processamento interno e devolve (retorna) um valor para o ponto onde foi chamada. Esse valor pode ser armazenado em variáveis.

```JavaScript
function calcularDobro(numero) {
    return numero * 2;
}
// Armazenando o resultado do retorno
let resultado = calcularDobro(5); // resultado será 10
```

### Função Anônima
É uma função que não possui um nome explícito. Geralmente é atribuída a uma variável ou passada diretamente como argumento para outra função ou evento.

```JavaScript
let saudar = function() {
    console.log('Olá, Mundo!');
};
// Executando a função anônima:
saudar();
```

### Arrow Function (Função de Seta)
Uma sintaxe moderna e simplificada para escrever funções em JavaScript introduzida no ES6. Muito utilizada para funções anônimas e callbacks.

```JavaScript
// Sintaxe padrão de Arrow Function
let somar = (a, b) => {
    return a + b;
};

// Sintaxe super reduzida (quando possui apenas 1 linha de retorno)
let subtrair = (a, b) => a - b;

console.log(somar(10, 5)); // 15
```

## 4. Formatando Números
### `toFixed()`
O método `toFixed()` é usado para formatar um número controlando a quantidade de casas decimais que serão exibidas após o ponto. Ele também realiza o arredondamento matemático automático e retorna o valor formatado como uma string.

```JavaScript
let precoOriginal = 19.99345;

// Formatando para 2 casas decimais
let precoFormatado = precoOriginal.toFixed(2); 

console.log(precoFormatado); // Saída: "19.99" (Tipo String)
```

## 5. Estruturas de Dados: Arrays (Listas)
Arrays são coleções ordenadas de elementos capazes de armazenar múltiplos valores sob uma única variável.

Como criar listas

```JavaScript
// Criando uma lista vazia
let listaVazia = [];

// Criando uma lista já populada (com dados)
let frutas = ['Maçã', 'Banana', 'Morango'];
```

### Propriedades e Métodos Fundamentais de Arrays
* `length` (Propriedade): Retorna o tamanho total da lista (quantidade de elementos).

```JavaScript
console.log(frutas.length); // Saída: 3
```

* `push(elemento)`: Adiciona um ou mais elementos ao final da lista.

```JavaScript
frutas.push('Melancia');
console.log(frutas); // Saída: ['Maçã', 'Banana', 'Morango', 'Melancia']
```
* `pop()`: Remove o último elemento da lista e o retorna.

```JavaScript
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // Saída: 'Melancia'
console.log(frutas);      // Saída: ['Maçã', 'Banana', 'Morango']
```

* `includes(elemento)`: Verifica se um determinado elemento existe na lista, retornando true (verdadeiro) ou false (falso).

```JavaScript
let temBanana = frutas.includes('Banana');
console.log(temBanana); // Saída: true

let temAbacaxi = frutas.includes('Abacaxi');
console.log(temAbacaxi); // Saída: false
```