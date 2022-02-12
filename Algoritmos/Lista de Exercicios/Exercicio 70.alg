algoritmo "Sequencia_FIbonacci"
// Função : 70) [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência
//de Fibonacci:
//1 1 2 3 5 8 13 21...
// Autor : Oscar Luis Yopan
// Data : 04/02/2022
var
C, A, B, S : Inteiro
inicio
EscrevaL ("===============================")
EscrevaL ("      Sequencia Fibonacci      ")
EscrevaL ("===============================")
A <- 0
Escreva (A)
B <- 1
Escreva (B)
Para C <- 3 Ate 10 Passo 1 Faca
   S <- A + B
   Escreva (S)
   A <- B
   B <- S
FimPara
EscrevaL(" ")
EscrevaL ("================================")
fimalgoritmo
