algoritmo "Quais_Emre_0-10"
// Função : Faça um programa que pergunte x valores e verifique quantos estão
//entre 0 e 10.
// Autor : Oscar Luis Yopan
// Data : 31/01/2022
var
C, N, T : Inteiro
inicio
EscrevaL ("-------------------------------")
EscrevaL ("          Entre 0-10?          ")
EscrevaL ("-------------------------------")
T <- 0
Para C <- 1 Ate 6 Faca
   Escreva ("Numero ", C, ": ")
   Leia (N)
   Se (N > 0) e (N < 11) Entao
      T <- T + 1
   Fimse
FimPara
EscrevaL ("-----------")
EscrevaL ("Total entre 0 - 10: ", T)
EscrevaL ("----------------------------- -")
fimalgoritmo
