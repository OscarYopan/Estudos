function meuEscopo() {
  const form = document.querySelector('.form')
  let resultado = document.querySelector('.resultado')

  const pessoas = []

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura')    

    resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`
  }

  form.addEventListener('submit', recebeEventoForm);

}

meuEscopo() //exexutando a funcao