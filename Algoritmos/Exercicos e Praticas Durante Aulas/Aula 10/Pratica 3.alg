algoritmo "Fatorial"
// Função :
// Autor : Oscar Luis Yopan
// Data : 28/01/2022
var
C, F, N : Inteiro
P : Caractere
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                              Fatorial                              ")
EscrevaL ("--------------------------------------------------------------------")
Repita
   Escreva ("Fatorial de: ")
   Leia (N)
   C <- N
   F <- 1
   Repita
      F <- (F * C)
      C <- (C - 1)
   Ate (C < 1)
   Escreva ("Gostaria de Fatorar Mias? [S/N]: ")
   Leia (P)
   EscrevaL ("--------------------")
   EscrevaL ("o Fatorial é: ", F)
   LimpaTela
Ate (P = "N")
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
