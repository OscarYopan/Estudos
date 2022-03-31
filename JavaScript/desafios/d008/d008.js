function calculo(){
  var produto = prompt('Qual é o produto que vocês está comprando?')
  var preco = prompt(`Qual é o preço (R$) do(a) ${produto}?`)
  var precoi = Number(preco).toFixed(2)
  var desconto = (preco/10).toFixed(2)
  var precof = (preco - desconto).toFixed(2)
  var res = document.getElementById('res')
  res.innerHTML = `<p>O preço do(a) ${produto} é: R$ ${precoi}</p>
  <p>Você acaba de ganhar um desconto de R$ ${desconto} (-10%).</p>
  <p>Preço final do(a) ${produto} é: R$ ${precof}</p>`
}