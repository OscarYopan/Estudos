//capturar evente de submit do formulario
const form = document.querySelector('.form')

//parar de recarregar a página
form.addEventListener('submit', function(event){
  event.preventDefault();
  calculo()
})

function calculo(msg){
  const peso = document.querySelector('#peso');
  const altura = document.querySelector('#altura');
  const res = document.querySelector('.resultado');
  let imc = peso / (altura/100)

  if(imc <= 18.5){
    res.innerHTML = (`Seu IMC é: ${imc}`);
  }else if(imc > 18.5 && imc < 25){
    res.innerHTML = (`Seu IMC é: ${imc}`);
  }else if(imc >= 25 && imc < 30){
    res.innerHTML = (`Seu IMC é: ${imc}`);
  }else if(imc >= 30 && imc < 35){
    res.innerHTML = (`Seu IMC é: ${imc}`);
  }else if(imc >= 35 && imc < 40){
    res.innerHTML = (`Seu IMC é: ${imc}`);
  }else if (imc >= 40){
    res.innerHTML = (`Seu IMC é: ${imc}`);
  }
}