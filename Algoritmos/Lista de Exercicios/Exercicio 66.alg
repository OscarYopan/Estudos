algoritmo "Taboada"
// Função : 66) Escreva um programa que leia um número qualquer e mostre a tabuada desse
//número, usando a estrutura “para”.
//Ex: Digite um valor: 5
//           5 x 1 = 5
//            5 x 2 = 10
//            5 x 3 = 15 ...
// Autor : Oscar Luis Yopan
// Data : 04/02/2022
var
C, T, R : inteiro
inicio
EscrevaL ("==============================================")
EscrevaL ("                  Taboada                     ")
EscrevaL ("==============================================")
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
EscrevaL ("==============================================")
fimalgoritmo
