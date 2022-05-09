import Modal from './modal.js';

const modal = Modal()

//Ler todos os botões com a class 'check'
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", event => {
        //abrir modal
        modal.open()
    })
})


// Quando botao delete for clicado abre o 'modal'
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', event =>{
        //fechar modal
        modal.open()
    } )
})