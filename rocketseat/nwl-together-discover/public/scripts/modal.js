export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener('click', close)

    function open(){
        //funcionalidade de adicionar a class 'active' no modal
        modalWrapper.classList.add('active')
    }
    function close(){
        //funcionalidade de remover a class 'active' do modal
        modalWrapper.classList.remove('active')
    }

    return{
        open,
        close
    }
}