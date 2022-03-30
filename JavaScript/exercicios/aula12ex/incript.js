function carregar(){
var msg = document.getElementById('subtitle')
var pic = document.getElementById('imagem')
var data = new Date()
var time = data.getHours()
msg.innerHTML = `Agora são ${time} horas.`
if(time >= 6 && time < 8 ){
  pic.src = 'imagens/amanhecer.png'
}else if(time > 8 && time < 12){
  pic.src = 'imagens/manha.png'
}else if(time >= 12 && time < 18){
  pic.src = 'imagens/tarde.png'
}else if(time >= 18 && time < 19){
  pic.src = 'imagens/anoitecer.png'
}else{
  pic.src = 'imagens/noite.png'
}
}
