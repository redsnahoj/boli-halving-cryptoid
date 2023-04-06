const getDataFromUser = () => {
  return Number(prompt('Introduzca el número de días que quiere que se promedie su operación. Ejemplo: 7 días (solo el número):'));
};

const calculateAverage = (data, days) => {
  let averageResult = 0;
  for (let i = 1; i <= days; i++) {
    averageResult += Number(data[i]);
  }
  return averageResult / days;
};

const getRowData = (table, days) => {
  let rowData = [];
  for (let i = 1; i <= days; i++) {
    rowData[i] = table.getElementsByTagName('tr')[i].getElementsByTagName('td')[1].innerHTML;
  }
  return rowData;
};

const getDataBlock = (table) => {
  return Number(table.getElementsByTagName('tr')[0].getElementsByTagName('td')[2].innerHTML);
};

const displayResult = (average, daysRemaining) => {
  const BY = 'By: @redsnahoj';
  const msgResult = `El promedio de bloque diario es de: ${average}
\nY faltan ${daysRemaining.toFixed(2)} días aproximadamente para el Halving
\n${BY}`;

  console.log(msgResult);
  alert(msgResult);
};

const main = () => {
  const HALVING = 1500000;
  const averageDays = getDataFromUser();
  const dataTable = document.getElementById('overview-table').childNodes[2];
  const rowData = getRowData(dataTable, averageDays);
  const averageResult = calculateAverage(rowData, averageDays);
  const dataBlock = getDataBlock(dataTable);
  const daysRemaining = (HALVING - dataBlock) / averageResult;

  displayResult(averageResult, daysRemaining);
};

main();