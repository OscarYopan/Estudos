algoritmo "Prenchimento_Automatico_Vetor"
// Função : 72) Crie um programa que preencha automaticamente (usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
//           5 10 15 20 25 30 35 40 45  50
//           0  1  2 3  4   5  6  7  8  9
// Autor : Oscar Luis Yopan
// Data : 14/02/2022
var
N : Vetor [0..10] De Inteiro
C, V : Inteiro
inicio
EscrevaL ("--------------------------------------------")
EscrevaL ("         Prenchimento Automatico +5         ")
Escreval ("--------------------------------------------")
V <- 0
Para C <- 1 Ate 10 Faca
     V <- V + 5
     N[C] <- V
     Escreva (N[C])
FimPara
EscrevaL (" ")
EscrevaL ("--------------------------------------------")

// Seção de Comandos 
fimalgoritmo
