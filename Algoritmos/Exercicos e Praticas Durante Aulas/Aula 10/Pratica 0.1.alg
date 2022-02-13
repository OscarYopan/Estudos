algoritmo "Somar_No_Repita"
// Função : Calcular numerei de x quantidade usando o comando repita.
// Autor : Oscar Luis Yopan
// Data : 28/01/2022
var
C, T, A : inteiro
S : Caractere
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                           Some 'X' Numerais                        ")
EscrevaL ("--------------------------------------------------------------------")
C <- 1
Repita
   Escreva ("Valor ", C, " :")
   Leia (A)
   C <- (C + 1)
   T <- (T + A)
   Escreva ("Deseja Somar Mais? [S/N]")
   Leia (S)
Ate (S = ("N"))
EscrevaL ("-----------------------------------------")
EscrevaL ("A soma total dos Valores é: ", T)
EscrevaL ("--------------------------------------------------------------------")
// Seção de Comandos
fimalgoritmo
