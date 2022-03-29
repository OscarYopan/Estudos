var cot = prompt('Qual a cotação atdual do Dólar?')
function calcule(){
  var cart = prompt('Quantos Reais(R$) você têm na carteira?')
  var cont = document.getElementById('container')
  var conv = (cart / cot)
  cont.innerHTML =`<p>Com os R$ ${cart} reais, você consegue comprar U$$ ${conv} doláres.</p>`
}