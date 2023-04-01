// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


let pertence = false;

do {
  let soma = 0;
  let anterior1 = 1;
  let anterior2 = 0;
  
  const numero = parseInt(prompt("Digite um número que irei verificar se ele pertence a sequência de Fibonacci"));

  while(soma <= numero){
      soma = anterior1 + anterior2
      anterior2 = anterior1
      anterior1 = soma
      if(soma == numero || numero == 0){
          pertence = true
          break
      }
  }

  if(pertence){
      console.log("Este número pertence à sequência de Fibonacci.")
  } else {
      console.log("Este número não pertence à sequência de Fibonacci.")
      const opcao = prompt("Deseja tentar novamente? (s/n)").toLowerCase()
      if (opcao === "n") {
          break;
      }
  }

} while (!pertence);
