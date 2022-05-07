import Modal from './modal.js'

const modal = Modal()

//pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check") 

//adicionar escuta nos botões, para saber quando forem clicados
checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener("click", handleClick)
})

modal.open()