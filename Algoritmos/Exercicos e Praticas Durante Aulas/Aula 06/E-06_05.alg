algoritmo "E-06_05"
// Função : Calcular quanto creuza quer de emprestimo, em quantas parcelass
//ela vai pagar o valor das parcelas e o preço final do emrpestimo. Juros a 20%
// Autor : Oscar Luis Yopan
// Data : 20/09/2021
var
   Emp, Par, Total, ParV: real
inicio
      Escreva ("Qual o valor  do empréstimmo? ")
      Leia (Emp)
      Escreva  ("Quer  pagar  em quantas parcelas? ")
      Leia (Par)
      Total <- (Emp+((Emp*20)/100))
      ParV <- Total/Par
      Escreva ("Vou pagar ", Par, " Parcelas de R$", Parv:10:2)
fimalgoritmo
