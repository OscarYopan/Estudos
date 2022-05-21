const numeroPedido = Number(prompt('Digite um número:'))
let numeroEnviado = document.getElementById('numero-titulo')
let texto = document.getElementById('texto')

numeroEnviado.innerHTML = numeroPedido
texto.innerHTML = `Raiz Quadrada: ${numeroPedido ** (1/2)}.<br/>`
texto.innerHTML += `${numeroPedido} é inteiro?: ${Number.isInteger(numeroPedido)}.<br/>`
texto.innerHTML += `É NaN?: ${Number.isNaN(numeroPedido)}.<br/>`
texto.innerHTML += `Arredondado para baixo: ${Math.floor(numeroPedido)}.<br/>`
texto.innerHTML += `Arredondado para cima: ${Math.ceil(numeroPedido)}.<br/>`
texto.innerHTML += `Com duas casas decimais: ${numeroPedido.toFixed(2)}<br/>`