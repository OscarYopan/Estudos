function calculo(){
  var name = document.getElementById('nome')
  var salat = document.getElementById('salario')
  var aumento = document.getElementById('aumento')
  var res = document.getElementById('res')
  var salatual = (salat.value)
  var aument = (aumento.value) 
  var salnov = (salatual + (salatual/aument))
  var nome = (name.value)
  res.innerHTML = `<p>${nome} seu salário foi aumentado para ${salnov}</p>`
}