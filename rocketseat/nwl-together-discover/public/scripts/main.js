import Modal from './modal'

const modal = Modal()

modal.open()

//pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

//adicionar escuta nos botões, para saber quando forem clicados
checkButtons.forEach(button => {
  button.addEventlistener('click', event => {
    modal.open()
  })
})

//const deleteButtons = document.querySelectorAll('.delete')