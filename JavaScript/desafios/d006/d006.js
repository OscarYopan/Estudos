function calcule(){
  var cel = prompt('Digite uma temperatura  em C (Celsius)')
  var res = document.getElementById('container')
  var kel = (cel + 273.15)
  var fah = ((cel * 1.8) + 32)
  res.innerHTML(`<h2>A temperatura  de ${cel} C, corresponde a...</h2>
  <p>${kel} k (Kelvin)</p>
  <p>${fah} F (Fahrenheit)</p>`)
}