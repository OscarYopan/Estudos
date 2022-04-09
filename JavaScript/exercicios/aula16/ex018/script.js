let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('section#res')
let valores = []

function isnumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

/*
function inlista(n, l){
  if(l.indexof(Number(n)) != -1){
    return true
  }else{
    return false
  }
}
*/

function adicionar(){
  if(isnumero(num.value) /*&& !inlista(num.value, valores)*/){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text=`Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML=`<p>Analise Completa dos Numeros:</p>`
  }else{
    alert('[Erro] Numero inválido ou repetido')
  }
  num.value = ``
  num.focus()
}

function finalizar(){
  if(valores.length == 0){
    alert('Antes de Finalizar, adicione valores.')
  }else{
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores){
      soma += valores[pos]
      if(valores[pos] > maior){
        maior = valores[pos]
      }else if(valores[pos] < menor){
        menor = valores[pos]
      }
    }
    media = (soma/total)
    res.innerHTML=`<h3>Analise dos Numeros</h3>`
    res.innerHTML+=`<p>Total de numeros cadastrados: ${total}.</p>`
    res.innerHTML+=`<p>O maior valor adicionado foi: ${maior}.</p>`
    res.innerHTML+=`<p>O menor valor adicionado foi: ${menor}.</p>`
    res.innerHTML+=`<p>A soma de todos valores é: ${soma}</p>`
    res.innerHTML+=`<p>A media dos valores é: ${media}</p>`
  }
}