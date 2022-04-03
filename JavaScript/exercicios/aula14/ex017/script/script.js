function calcular(){
  var num = document.getElementById('txtn')
  var n = Number(num.value)
  var saida = document.getElementById('saida')
  c = 1
  //saida.innerHTML=`<p>teste ${n}</p>`
  if(n > 0 && n < 11){
    while(c<11){
      var r = c * n
      saida.innerHTML+=`${r}`
      c++
    }
  }else{
    saida.innerHTML=`<p>[Erro] Numero invalido, escolha um numero entre 1 e 10</p>`
  }
}