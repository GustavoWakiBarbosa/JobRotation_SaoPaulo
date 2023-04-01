// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

fetch('dados.json')
  .then(response => response.json())
  .then(faturamentoMensal => {
    const valoresDiarios = faturamentoMensal.filter(({ valor }) => valor > 0).map(({ valor }) => valor);
    const menorValor = Math.min(...valoresDiarios);
    const maiorValor = Math.max(...valoresDiarios);
    const somaValores = valoresDiarios.reduce((acc, valor) => acc + valor, 0);
    const media = somaValores / valoresDiarios.length;
    const diasAcimaDaMedia = valoresDiarios.filter(valor => valor > media).length;

    console.log(`Menor valor de faturamento diário: R$ ${menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento diário: R$ ${maiorValor.toFixed(2)}`);
    console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);
  });


