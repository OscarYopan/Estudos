function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const ano = data.getFullYear();
  const mes = data.getMonth() + 1;
  const dia = data.getDate();
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const segundo = data.getSeconds();
  return `${dia}-${mes}-${ano} ${hora}:${minuto}:${segundo}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil);