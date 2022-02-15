algoritmo "Taboada"
// Função : Criar uma calculadora de tabuada.
// Autor : Oscar Luis Yopan
// Data : 28/01/2022
var
C, T, R : inteiro
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                              Taboada                               ")
EscrevaL ("--------------------------------------------------------------------")
C <- 1
Escreva ("Taboada de: ")
   Leia (T)
Repita
   R <- (C * T)
   EscrevaL (C, " x", T, " = ", R)
   C <- (C + 1)
Ate (C > 10)
EscrevaL ("-----------")
EscrevaL ("Acabou!")
EscrevaL ("--------------------")
fimalgoritmo
