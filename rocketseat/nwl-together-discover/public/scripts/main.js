import Modal from './modal.js';

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Ler todos os botões com a class 'check'
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", event => {

        modalTitle.innerHTML = 'Marcar como lida'
        modalDescription.innerHTML = 'Tem certeza que quer marcar esta pergunta como lida?'
        modalButton.innerHTML = 'Sim, marcar'

        //abrir modal
        modal.open()
    })
})


// Quando botao delete for clicado abre o 'modal'
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', event =>{

        modalTitle.innerHTML = 'Excluir pergunta'
        modalDescription.innerHTML = 'Tem certeza que deseja excluir esta pergunta?'

        //fechar modal
        modal.open()
    } )
})