algoritmo "Sorteio"
// Função : 50) Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
//mostre na tela:
//       a) Quais foram os números sorteados
//       b) Quantos números estão acima de 5
//       c) Quantos números são divisíveis por 3
// Autor : Oscar Luis Yopan
// Data : 27/01/2022
var
C, A, D, R : inteiro
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                               Sorteio                              ")
EscrevaL ("--------------------------------------------------------------------")
C <- 0
D <- 0
A <- 0
Enquanto (C < 21) Faca
   R <- Randi (10)
   C <- (C + 1)
   Se (R > 5 ) entao
      A <- (A + 1)
      se ((R % 3) = 0) entao
         D <- (D + 1)
      FimSe
   FimSe
   EscrevaL (R)
FimEnquanto
EscrevaL ("---------------------")
EscrevaL ("Maiores que 5: ",A)
EscrevaL ("Divisiveis por 3: ", D)
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
