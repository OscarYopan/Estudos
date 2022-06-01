const numeroPedido = Number(prompt('Digite um número:'))
let numeroEnviado = document.getElementById('numero-titulo')
let texto = document.getElementById('texto')

numeroEnviado.innerHTML = numeroPedido
texto.innerHTML = `<p>Raiz Quadrada: ${numeroPedido ** (1/2)}</p>`
texto.innerHTML += `<p>${numeroPedido} é inteiro?: ${Number.isInteger(numeroPedido)}</p>`
texto.innerHTML += `<p>É NaN?: ${Number.isNaN(numeroPedido)}</p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numeroPedido)}</p>`
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numeroPedido)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numeroPedido.toFixed(2)}</p>`