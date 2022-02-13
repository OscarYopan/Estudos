algoritmo "Soma_D_10"
// Função : Somar 10 numeros.
// Autor : Oscar Luis Yopan
// Data : 25/01/2022
var
Cont, N, R : real
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                           Some 10 Numerais                         ")
EscrevaL ("--------------------------------------------------------------------")
Cont <- 1
R <- 0
Enquanto (Cont <= 10) faca
         Escreva ("Valor ", Cont, " :")
         Leia (N)
         Cont <- (Cont + 1)
         R <- (R + N)
FimEnquanto
EscrevaL ("-----------------------------------------")
EscrevaL ("A soma total dos Valores é: ", R)
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
