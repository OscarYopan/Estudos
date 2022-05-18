/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Vitor'
const sobrenome = 'Hugo'
const idade = 30
const peso = 84
const altura = 1.80

let imc = (peso / (altura * altura))
let anoNasc = 2022 - idade

console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso} kg tem ${altura} metros de altura e seu IMC é ${imc}.`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNasc}.`)