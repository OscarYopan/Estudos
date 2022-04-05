function calcular(){
  var aa = prompt('Qual é o valor de "a" ?')
  var bb = prompt('Qual é o valor de "b"?')
  var cc = prompt('Qual é o valor de "c"?')
  var res = document.getElementById('res')
  var a = Number(aa)
  var b = Number(bb)
  var c = Number(cc)
  var delta = (a + b + c)
  res.innerHTML = `<p>O resultado é: ${delta}</p>`
}