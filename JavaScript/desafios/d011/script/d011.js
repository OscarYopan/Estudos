function verificar(){
  let ano = document.getElementById('ano')
  let res = document.getElementById('res')
  let year = Number(ano.value)
  let ano4 = year%4
  let ano100 = year%100
  let ano400 = year%400
  if(year == 0){
    alert('[Erro] Ano Inválido')
    res.innerHTML=`<p>Coloque uma ano diferente de 0!</p>`
  }else if((ano4 && ano100 && ano400)==0){
    res.innerHTML=`<p>O ano <strong>${year}</strong> <strong>é</strong> ano Bissexto.</p>`    
  }else if((ano4 && ano100 && ano400)!=0){
    res.innerHTML=`<p>O Ano <strong>${year}</strong> <strong>não é</strong> ano Bissexto.</p>`
  }
}