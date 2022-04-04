function calculo(){
  var name = document.getElementById('nome')
  var salat = document.getElementById('salario')
  var aumento = document.getElementById('aumento')
  var res = document.getElementById('res')
  var salatual = Number(salat.value)
  var aument = Number(aumento.value) 
  var salnov = (salatual + (salatual/aument)).toFixed(2)
  var nome = (name.value)
  res.innerHTML = `<p>${nome} seu salário foi aumentado para R$ ${salnov}</p>`
}