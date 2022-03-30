function carregar(){
var msg = document.getElementById('subtitle')
var pic = document.getElementById('imagem')
var data = new Date()
var time = data.getHours()
msg.innerHTML = `Agora são ${time} horas.`
if(time >= 6 && time < 8 ){
  pic.src = 'imagens/amanhecer.png'
  document.body.style.backgroundColor = '#f9bd5a'
}else if(time > 8 && time < 12){
  pic.src = 'imagens/manha.png'
  document.body.style.backgroundColor = '#446568'
}else if(time >= 12 && time < 18){
  pic.src = 'imagens/tarde.png'
  document.body.style.backgroundColor = '#4b99fe'
}else if(time >= 18 && time < 19){
  pic.src = 'imagens/anoitecer.png'
  document.body.style.backgroundColor = '#a085d1'
}else{
  pic.src = 'imagens/noite.png'
  document.body.style.backgroundColor = '#272728'
}
}
