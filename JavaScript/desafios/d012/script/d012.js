function verificar(){
  let anterior = document.getElementById('precant')
  let atual = document.getElementById('precatu')
  let res = document.getElementById('res')
  let ant = Number(anterior.value).toFixed(2)
  let at = Number(atual.value).toFixed(2)
  let dif = (ant - at).toFixed(2)
  let aum = (at - ant).toFixed(2)
  let por = ((at*100)/ant)
  let porpos = (100-por).toFixed(1)
  let porneg = (por-100).toFixed(1)
  res.innerHTML=`<p><strong>Analisando os valores informados:</strong></p>
  <p>O produto custava ${ant} e agora custa ${at}.</p>`
  if(at < ant){
    res.innerHTML+=`<p>Agora o produto está mais barato.</p>`
    res.innerHTML+=`<p>O preço caiu R$ ${dif}, em relação ao preço inicial.</p>`
    res.innerHTML+=`<p>Uma variação de ${porpos}% para baixo.</p>`
  }else if(at > ant){
    res.innerHTML+=`<p>Agora o produto está mais caro.</p>`
    res.innerHTML+=`<p>O preço aumentou R$ ${aum}, em relação ao preço inicial.</p>`
    res.innerHTML+=`<p>Uma variação de ${porneg}% para cima.</p>`
  }else if(at == ant && dif == 0){
    res.innerHTML+=`<p>O produto está com o mesmo preço de antes.</p>`
    res.innerHTML+=`<p>Não há variação no preço.</p>`
    res.innerHTML+=`<p>Uma variação de 0%.</p>`
  }
}