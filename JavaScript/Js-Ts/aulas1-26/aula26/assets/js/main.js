//capturar evente de submit do formulario
const form = document.querySelector('.form')

//parar de recarregar a página
form.addEventListener('submit', function(event){
  event.preventDefault();
  const inputPeso = event.target.querySelector('#peso')
  const inputAltura = event.target.querySelector('#altura')

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if(!peso){
    setResultado('Peso Inválido', false)
    return
  }

  if(!altura){
    setResultado('Altura Inválida', false)
    return
  }

  const imc = getImc(peso, altura)

  console.log(imc);
})

//Função para calcular o IMC
function getImc(peso, altura){
  const imc = (peso / (altura/100)) ** 2
  return imc.toFixed(2)
}

//Função para criar um paragrafo dentro do HTML
function criaP(){
  const p = document.createElement('p');
  return p;  
}

function setResultado(msg, isValid){
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = '';

  const p = criaP();
  p.innerHTML = msg
  resultado.appendChild(p)
}

function calculo(msg){
  const p = criaP
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