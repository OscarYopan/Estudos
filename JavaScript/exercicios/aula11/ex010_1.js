function pais(){
  var txtn = document.querySelector('input#txtnac')
  var bra = 'Brasil'
  var res = document.querySelector('div#res')
  var nac = (txtn.value)
  res.innerHTML = `<p>Vocé nasceu no(a) ${nac}.</p>`
  if (nac == bra){
    res.innerHTML += '<p>Você é Brasileiro!</p>'    
  }else{
    res.innerHTML += '<p>Você é Estrangeiro!</p>'
  }
}