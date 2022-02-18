algoritmo "semnome"
// Função : 80) Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
// 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
// número (chave) e seu programa deve mostrar em que posições essa chave foi
// encontrada. Mostre também quantas vezes a chave foi sorteada.
// Autor : Oscar Luis Yopan
// Data : 14/02/2022
var
N : Vetor [1..10] De Inteiro
C, R, L, T :  Inteiro
inicio
EscrevaL ("------------------------")
EscrevaL ("      Random Vetor      ")
EscrevaL ("------------------------")
T <- 0
Para C <- 1 Ate 10 Faca
   R <- Randi (9) + 1
   N[C] <- R
   Escreva (N[C])
FimPara
EscrevaL (" ")
EscrevaL ("--------")
Escreva ("Numero para Localizar: ")
Leia (L)
Para C <- 1 Ate 10 Faca
   Se (N[C] = L) Entao
      T <- T + 1
      EscrevaL ("Posicao: ", C)
   FimSe
FimPara
EscrevaL ("Total: ", T)
EscrevaL (" ")
EscrevaL ("------------------------")
fimalgoritmo
