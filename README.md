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