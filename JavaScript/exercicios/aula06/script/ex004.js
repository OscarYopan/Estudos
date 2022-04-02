var nome = prompt('Qual o seu nome: ')
document.write(
  `Olá, <strong>${nome}</strong>, seu nome tem ${nome.length} letras<br/>`
)
document.write(`Seu nome em maiusculo: ${nome.toUpperCase()}!<br/>`)
document.write(`Seu nome em minusculo: ${nome.toLowerCase()}<br/>`)