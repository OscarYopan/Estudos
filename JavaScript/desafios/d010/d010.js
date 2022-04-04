function calcular(){
  var aa = prompt('Qual é o valor de "a" ?')
  var bb = prompt('Qual é o valor de "b"?')
  var cc = prompt('Qual é o valor de "c"?')
  var res = document.getElementById('res')
  var a = Number(aa.value)
  var b = Number(bb.value)
  var c = Number(cc.value)
  delta = a + b + c
  res.innerHTML = `<p>${delta}</p>`
}