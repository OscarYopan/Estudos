algoritmo "Preenchimento_Automatico_Regressivo"
// Função : 73) Crie um programa que preencha automaticamente (usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
//           9 8 7 6 5 4 3 2 1 0
//           0 1 2 3 4 5 6 7 8 9
// Autor : Oscar Luis Yopan
// Data : 14/02/2022
var
N : Vetor [0..10] De Inteiro
C, V : Inteiro
inicio
EscrevaL ("---------------------------------")
EscrevaL ("        P. A. Regressivo         ")
EscrevaL ("---------------------------------")
V <- 10
Para C <- 1 Ate 10 Faca
     V <- V - 1
     N[C] <- V
     Escreva (N[C])
FimPara
EscrevaL (" ")
EscrevaL ("---------------------------------")
fimalgoritmo
