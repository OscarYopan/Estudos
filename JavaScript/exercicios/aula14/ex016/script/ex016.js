function contar(){
  let inicio = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('saida')
  let i = Number(inicio.value)
  let f = Number(fim.value)
  let p = Number(passo.value)
  //caso falte preencher algum dado
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
    alert('[Erro] Preencha todos os campor')
    res.innerHTML=`<p>[Erro] Impossivel Contar.</p>`
  }else if(i<f){
    //contagem Crescente
    while(i<f){
      res.innerHTML+=`${i} \u{27A1}`
      i = i + p
    }
    res.innerHTML+=`\u{1f3c1}`    
  }else if(i>f){
    //contagem regressiva
    while(i>f){
      res.innerHTML+=`${i} \u{27A1}`
      i = i - p
    }
    res.innerHTML+=`\u{1f3c1}`
  }
}