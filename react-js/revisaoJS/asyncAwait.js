function numeroAleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string ') {
        reject('Cai no Erro')
        return
      }

      resolve(msg.toUpperCase() +  ' - Passei na Promisse');
      return
    }, tempo);
  });
}

esperaAi('Fase 1', numeroAleatorio(0, 3))
  .then(valor => console.log(valor);)