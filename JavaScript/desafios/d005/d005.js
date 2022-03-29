function calcule(){
  var m = prompt('Digite uma distância em metros(m)')
  var cont = document.getElementById('container')
  var km = (m/1000)
  var hm = (m/100)
  var dam = (m/10)
  var dm = (m*10)
  var cm = (m*100)
  var mm = (m*1000)
  cont.innerHTML=`<h2>A distância de ${m} metros, corresponde a...</h2>
  <p>${km} quilômetros (km)</p>
  <p>${hm} hectômetros (Hm)</p>
  <p>${dam} decâmetros (Dam)</p>
  <p>${dm} decimetros (dm)</p>
  <p>${cm} centímetros (cm)</p>
  <p>${mm} milímetros (mm)</p>`
}