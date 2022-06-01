//capturar evente de submit do formulario
const form = document.querySelector('.form')

//parar de recarregar a página
form.addEventListener('submit', function(event){
  event.preventDefault();
  console.log('Prevenido!');
})

function calculo(){
  const peso = document.querySelector('#peso');
  const altura = document.querySelector('#altura');
  const res = document.querySelector('.resultado');
  let imc = peso / altura

  // if(imc <= 18.5){
  //   res.innerHTML = (`Seu IMC é: ${imc}`);
  // }

  res.innerHTML = (`Seu IMC é: tanto`);
}
