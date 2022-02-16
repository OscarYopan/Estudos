algoritmo "Aleatorio_Vetor"
// Função : 76) Crie um programa que preencha automaticamente um vetor numérico com 7
// números gerados aleatoriamente pelo computador e depois mostre os valores
// gerados na tela.
// Autor : Oscar Luis Yopan
// Data : 14/02/2022
var
N : Vetor [1..7] De Inteiro
C, R :  Inteiro
inicio
EscrevaL ("------------------------")
EscrevaL ("      Random Vetor      ")
EscrevaL ("------------------------")
Para C <- 1 Ate 7 Faca
       R <- Randi (9) + 1
       N[C] <- R
       Escreva (N[C])
FimPara
EscrevaL (" ")
EscrevaL ("------------------------")
fimalgoritmo
