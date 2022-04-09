let num = document.getElementById('novonumero')
let lista = document.getElementById('nlista')
let res = document.querySelector('section#res')
let valores = []

function isnumero(n){
  if(Number(n) > 0 && Number(n) < 101){
    return true
  }else{
    return false
  }
}
function inlista(n, l){
  if(l.indexof(Number(n) !=-1)){
    return true
  }else{
    return false
  }
}

function numeros(){
  if(isnumero(num.value) && !inlista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text=`Valor ${num.value} adicionado.`
    lista.appendChild(item)
  }else{
    alert('[Erro] Numero inválido ou repetido')
  }
}

/*function finalizar(){
  alert('Tchau')
}
*/