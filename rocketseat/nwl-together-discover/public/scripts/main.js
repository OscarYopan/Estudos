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