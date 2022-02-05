algoritmo "E-06_04"
// Função : Crie um programa que calcule os impostos pagos  em produtos
//importado dos EUA
// Autor : Oscar Luis Yopan
// Data : 20/09/2021
var
   Prod, Imp: real
inicio
      Escreva ("Qual o valor do Produto? ")
      Leia (Prod)
      Imp <- ((Prod*60)/100)
      Escreva ("Terá que pagar de imposto o valor de R$ ", Imp:8:2)
fimalgoritmo
