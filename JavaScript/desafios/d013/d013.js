function media(){
  let nome = document.getElementById('nome')
  let nota1 = document.getElementById('nota1')
  let nota2 = document.getElementById('nota2')
  let name = (nome.value)
  let n1 = Number(nota1.value).toFixed(1)
  let n2 = Number(nota2.value).toFixed(1)
  let res = document.getElementById('res')
  let media = ((n1/2)+(n2/2)).toFixed(1)
  let str = document.getElementsByTagName('strong')
  if(media<3 && media>=0){
    res.innerHTML=`<h3>Aluno ${name} aproveitamento:</h3>
    <p>Com as notas ${n1} e ${n2} sua média foi: ${media}.</p>
    <p>O Aluno está <strong>REPROVADO!</strong></p>`
    str.style.color='red';
  }else if(media>= 3 && media<6){
    res.innerHTML=`<h3>Aluno ${name} aproveitamento</h3>:
    <p>Com as notas ${n1} e ${n2} sua média foi: ${media}.</p>
    <p>O Aluno está de <strong>RECUPERAÇÂO!</strong></p>`
  }else if(media>=6 && media<=10){
    res.innerHTML=`<h3>Aluno ${name} aproveitamento:</h3>
    <p>Com as notas ${n1} e ${n2} sua média foi: ${media}.</p>
    <p>O Aluno está <strong>APROVADO!</strong></p>`    
  }else if(media>10){
    alert('[Erro] Nota(s) inválida(s)!')
    res.innerHTML=`<p>[Erro] Favor revise as notas, e tente novamente.</p>`
  }
}