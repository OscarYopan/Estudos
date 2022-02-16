algoritmo "Lista_Nomes_Vetor"
// Função : 77) Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
// final, mostre uma listagem com todos os nomes informados, na ordem inversa
// daquela em que eles foram informados.
// Autor : Oscar Luis Yopan
// Data : 14/02/2022
var
L : Vetor[1..7] De Caractere
N : Caractere
C : Inteiro
inicio
EscrevaL ("--------------------------")
EscrevaL ("      Lista de Nomes      ")
EscrevaL ("--------------------------")
Para C <- 1 Ate 7 Faca
     Escreva ("Nome ", C, ": ")
     Leia (N)
     L[C] <- N
FimPara
EscrevaL ("~~~~~~~~~~~~~~~~~~")
EscrevaL ("       Nomes      ")
EscrevaL ("~~~~~~~~~~~~~~~~~~")
Para C <- 7 Ate 1 Passo -1 Faca
     EscrevaL (L[C])
FimPara
EscrevaL ("--------------------------")
fimalgoritmo
