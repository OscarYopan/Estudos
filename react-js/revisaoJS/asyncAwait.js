// ASYNG AWAIT

function numeroAleatorio(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('Cai no Erro')
        return
      }

      resolve(msg.toUpperCase() +  ' - Passei na Promisse');
      return
    }, tempo);
  });
}

/*
esperaAi('Fase 1', numeroAleatorio(0, 3))
  .then(valor => {
    console.log(valor);
    return esperaAi('Fase2', numeroAleatorio())
  })
  .then(fase => {
    console.log(fase);
    return esperaAi('Fase 3')
  })
  .then(fase => {
    console.log(fase);
  })
  .catch(e => console.log(e)
*/

async function executa() {

  try {
    const fase1 = await esperaAi('Fase 1', numeroAleatorio());
    console.log(fase1);
  
    const fase2 = await esperaAi('Fase 2', numeroAleatorio());
    console.log(fase2);
  
    const fase3 = await esperaAi('Fase 3', numeroAleatorio());
    console.log('Terminamos na Fase: ', fase3);
  } catch(e) {
    console.log('Errou Feio!');
  }

}

executa()