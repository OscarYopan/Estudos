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
  }else{
    alert('[Erro] Numero inválido ou repetido')
  }
  num.value = ``
  num.focus()
}

function finalizar(){
  alert('Tchau')
}