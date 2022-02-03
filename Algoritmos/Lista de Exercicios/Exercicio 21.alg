algoritmo "E-21"
// Função : Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
//BISSEXTO.
// Autor : Oscar Luis Yopan
// Data : 20/09/2021
var
   Ano: inteiro
   Ano4, Ano100, Ano400: real
inicio
      Escreva ("Digite o ano a ser consultado: ")
      leia (Ano)
      Ano4 <- Ano%4
      Ano100 <- Ano%100
      Ano400 <- Ano%400
      se (Ano4 e Ano100 e Ano400)=0 entao
      Escreva ("Ano Bissexto")
      fimse
      se (Ano4 e Ano100 e Ano400)<>0 entao
      Escreva ("Não é ano Bissexto")
      fimse
fimalgoritmo
