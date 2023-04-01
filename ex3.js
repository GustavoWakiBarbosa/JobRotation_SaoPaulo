// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

const valoresEstados = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };
  
  const valorTotal = Object.values(valoresEstados).reduce((acc, valor) => acc + valor, 0);
  
  const percentuaisEstados = {};
  for (let estado in valoresEstados) {
    percentuaisEstados[estado] = (valoresEstados[estado] / valorTotal) * 100
  }

  console.table("Percentual de representação por estado:");
  for (let estado in percentuaisEstados) {
    const percentual = percentuaisEstados[estado].toFixed(2);
    console.log(`${estado}: ${percentual}%`);
  }
  
  