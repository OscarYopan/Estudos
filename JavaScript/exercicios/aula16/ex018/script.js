let num = document.getElementById('novonumero')
let list = document.getElementById('nlista')
let res = document.querySelector('section#res')
let valores = []

function isnumero(n){
  if(Number(n) > 0 && Number(n) < 101){
    return true
  }else{
    return false
  }
}
function inlist(n){
  if(list.indexof(Number(n) !=-1)){
    return true
  }else{
    return false
  }
}

function numeros(){
  if(isnumero(num.value) && !inlist(num.value, valores)){
    alert('tudo certo')
  }else{
    alert('[Erro] Numero inválido ou repetido')
  }
}

function finalizar(){
  alert('Tchau')
}