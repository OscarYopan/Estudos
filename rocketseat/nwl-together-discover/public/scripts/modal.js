module.exports = function Modal(){
  function open(){
    //adicionar a classe 'active' para a modal
    document.querySelectorAll('.modal-wrapper').classlist.add('active')
  }
  function close(){
    //remover a classe 'active' da modal
  }

  return{
    open,
    close
  }
}