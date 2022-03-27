function calcule(){
  var m = prompt('Digite uma distância em metros(m)')
  var cont = document.getElementById('container')
  var km = (m/100)
  cont.innerHTML(`A distância de ${m} metros, corresponde a...
  S{km} quilômetros (km)`)
}