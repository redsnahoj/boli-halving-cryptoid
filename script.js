let getData = prompt('Introduzca el numero de días que quiere que se promedie su operación. Ejemplo 7 días (solo el número):')
let average = Number(getData);

const HALVING = 1000000;
const BY = 'By: @redsnahoj';

let rowData = [];
let averageResult = 0;
let daysRemaining = 0;

let dataTable = document.getElementById('overview-table').childNodes[2];

for (let i = 1; i <= average; i++) {
  rowData[i] = dataTable.getElementsByTagName('tr')[i].getElementsByTagName('td')[1].innerHTML;
  averageResult = averageResult + Number(rowData[i]);
}

let dataBlock = Number(dataTable.getElementsByTagName('tr')[0].getElementsByTagName('td')[2].innerHTML);

daysRemaining = (HALVING - dataBlock) / (averageResult / average);

let msgResult = `El promedio de bloque diario es de: ${averageResult / average}
\nY faltan ${daysRemaining.toFixed(2)} días aproximadamente para el Halving
\n${BY}`;

console.log(msgResult);
alert(msgResult);