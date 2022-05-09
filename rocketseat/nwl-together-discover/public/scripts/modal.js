export default function Modal(){
    function open(){
        //funcionalidade de adicionar a class 'active' no modal
        document.querySelector('.modal-wrapper').classList.add('active')
    }
    function close(){
        //funcionalidade de remover a class 'active' do modal
    }

    return{
        open,
        close
    }
}