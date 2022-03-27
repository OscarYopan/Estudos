function compras(){
  var prod = prompt('Qual produto está comprando?')
  var prec = prompt(`Quanto custa ${prod}?`)
  var din = prompt('Com quanto em dinheiro vai pagar?')
  var tro = din - prec
  alert(`Você comprou ${prod}. Que custou R$ ${prec}.
  Deu R$ ${din} em dinheiro, e vai recever R$ ${tro} de troco.
  Volte Sempre!`)
}