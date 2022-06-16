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
  const imc = (peso / ((altura/100)**2))
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

function getNivelImc(imc){
  const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso',
  'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];


  if(imc <= 18.5) return nivel[0];
  
  if(imc > 18.5 && imc < 25) return nivel[1];
  
  if(imc >= 25 && imc < 30) return nivel[2];
  
  if(imc >= 30 && imc < 35) return nivel[3];
  
  if(imc >= 35 && imc < 40) return nivel[4];
  
  if (imc >= 40) return nivel[5];
}