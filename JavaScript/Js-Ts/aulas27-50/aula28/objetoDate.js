// OBJETO DATE

/**
- 'new' é usado para um função construtora;
- 'Date()' nesse caso a primeira letra da função construtora é maiúscula
- O paramentro data é usado em milesimos de segundos
*/

// const data = new Date()  //vazio vai buscar a data horario e fuso horario atual
// console.log(data.toString());

// const umDia = 60 * 60 * 24 * 1000

// const dataUmDia = new Date(0 + umDia) // zero simboliza o marco inicial
// console.log(dataUmDia.toString());

const data = new Date(1987, 2, 4, 21, 0, 0, 500) //ano, mes, dia, hora, minuto, segundo, ms (nao se usa o '0' a esquerda). Usando-se numeros
console.log(data.toString());


const dataString = new Date('1987-03-04 21:00:00:500')
console.log(dataString.toString()); //ano, mes, dia, hora, minuto, segundo, ms (nao se usa o '0' a esquerda). Usando-se String, metodo mais comum.

//Consguir Diretamente os Dados Date()
const dataVarios = new Date()
console.log('Dia:', dataVarios.getDate());
console.log('Mes:', dataVarios.getMonth() + 1); //começa do '0'
console.log('Ano:', dataVarios.getFullYear());
console.log('Hora:', dataVarios.getHours());
console.log('Minuto:', dataVarios.getMinutes());
console.log('Segundo:', dataVarios.getSeconds());
console.log('Mili segundos:', dataVarios.getMilliseconds());
console.log('Dia da semana:', dataVarios.getDay() + 1); //começa do '0'