const nome = prompt('Digite seu Nome completo')
const comprimentoNome = nome.length
const letra2 = (nome[1])
const indiceA = nome.indexOf('a')
const indeceUltimoA = nome.lastIndexOf('a')
const ultimas3 = nome.slice([-3])
const palavrasNome = nome.split(' ')
const tudoMaiusculo = nome.toUpperCase()
const tudoMinusculo = nome.toLowerCase()

document.body.innerHTML = `Olá ${nome}, seja muito bem-vindo!<br/>`
document.body.innerHTML += `Seu nome tem: ${comprimentoNome} letras.<br/>`
document.body.innerHTML += `A segunda letra do seu nome é: ${letra2}.<br/>`
document.body.innerHTML += `A primeira letra 'A' no seu nome está no indice: ${indiceA}.<br/>`
document.body.innerHTML += `A ultima letra 'A' no seu nome está no induce: ${indeceUltimoA}.<br/>`
document.body.innerHTML += `As útimas 3 letras do seu nome são: ${ultimas3}.<br/>`
document.body.innerHTML += `As palavras do seu nome são: ${palavrasNome};<br/>`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${tudoMaiusculo}.<br/>`
document.body.innerHTML += `Seu nome com letras minusculas: ${tudoMinusculo}.<br/>`
