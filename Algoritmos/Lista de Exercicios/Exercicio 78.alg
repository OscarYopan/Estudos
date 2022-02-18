algoritmo "Multiplos de 10"
// Função : 78) Escreva um programa que leia 15 números e guarde-os em um vetor. No final,
// mostre o vetor inteiro na tela e em seguida mostre em que posições foram
// digitados valores que são múltiplos de 10.
// Autor : Oscar Luis Yopan
// Data : 14/02/2022
var
Mult : Vetor[1..15] De Inteiro
M : Vetor[1..15] De Inteiro
C, T, N : Inteiro
D : Real
inicio
EscrevaL ("-----------------------")
Escreval ("    Multiplos de 10    ")
EscrevaL ("-----------------------")
T <- 0
Para C <- 1 Ate 15 Faca
   Escreva ("Numero ", C, ": ")
   Leia (N)
   Mult[C] <- N
   D <- (N / 10)
   Escolha (D)
   Caso 1, 2, 3, 4, 5, 6, 7, 8, 9
      M[C] <- N
      T <- T + 1
   OutroCaso
      Escreva (" ")
   FimEscolha
FimPara
LimpaTela
Para C <- 1 Ate 15 Faca
     EscrevaL (M[C])
FimPara
EscrevaL ("--------")
EscrevaL ("Total de Multiplos de 10: ", T)
EscrevaL ("-----------------------")
fimalgoritmo
