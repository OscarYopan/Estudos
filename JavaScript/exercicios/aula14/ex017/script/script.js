function calcular(){
  var num = document.getElementById('txtn')
  var n = Number(num.value)
  c = 1
  if(n > 0 && n < 11){
    while(c<11){
      var saida = document.getElementById('saida')
      var r = c * n
      saida.innerHTML+=`<p>${c} x ${n} = ${r}</p>`
      c++
    }
  }else{
    var saida = document.getElementById('saida')
    alert('[Erro] Numero invalido.')
    saida.innerHTML=`<p>[Erro] Numero invalido, escolha um numero entre 1 e 10</p>`
  }
}