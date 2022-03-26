function calcular(){
  var txtv = document.getElementById('txtvel')
  var res = document.getElementById('res')
  var vel = Number(txtv.value)
  res.innerHTML = `<p>Sua velociade foi<strong> ${vel} Km/h.</strong></p>`
  if (vel > 80){
    res.innerHTML += `<p>Acima do limite de velocidade, <strong>Multado!</strong></p>`
  }
  res.innerHTML += `<p>Sempre dirija com sinto de segurança!</p>` 
}