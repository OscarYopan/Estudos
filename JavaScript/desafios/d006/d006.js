function calcule(){
  var c = prompt('Digite uma temperatura  em C (Celsius)')
  var k = (c+273.15)
  var f = ((c*1.8)+32)
  var cont = document.getElementById('container')
  cont.innerHTML(`<h2>A temperatura  de ${c}C, corresponde a...</h2>
  <p>${k} k (Kelvin)</p>
  <p>${f} F (Fahrenheit)</p>`)
}