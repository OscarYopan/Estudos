algoritmo "Simulação_Financiamento"
// Função : 33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra
//de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
//em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
//ela não pode exceder 30% do salário ou então o empréstimo será negado.
// Autor : Oscar Luis Yopan
// Data : 21/01/2022
// Seção de Declarações
var
I, R, P, F : real
A : inteiro
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                     Simulação de Financiamento                     ")
EscrevaL ("--------------------------------------------------------------------")
Escreva ("Valor do Imóvel: ")
Leia (I)
Escreva ("Renda Mensal: ")
Leia (R)
Escreva ("Anos Para Pagar: ")
Leia (A)
P <- (I/(A * 12))
F <- (30*(R/100))
EscrevaL ("----------------------------------------------")
se (P <= F) entao
   EscrevaL ("Financiamento Possivel!")
   EscrevaL ("Valor da Parcela: R$ ", P:6:2)
Senao
   EscrevaL ("Financiamento inviavel, renda baixa!")
   EscrevaL ("Valor da Parcela: R$ ", P:6:2)
fimse
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
