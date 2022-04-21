//-------------Abre e Fecha Menu------------------------
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}
//------------ Ao clicar esconder o Menu ----------------
const links = document.querySelectorAll('nav ul li a')
for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}