algoritmo "Oradenar_Vetor"
// Função : Crie um algoritmo que coloque em ordem os valores dentro de um vetor.
// Autor : Oscar Luis Yopan
// Data : 10/02/2022
var
V : Vetor[1..4] De Inteiro
C, J, Aux : Inteiro
inicio
EscrevaL ("-----------------------------")
EscrevaL ("   Ordenar Valors do Vetor   ")
EscrevaL ("-----------------------------")
Para C <- 1 Ate 4 Faca
   Escreva ("Numero: ")
   Leia (V[C])
FimPara
Para C <- 1 Ate 3 Faca
   Para J <- C + 1 Ate 4 Faca
      Se V[C] > V[J] entao
         Aux <- V[C]
         V[C] <- V[J]
         V[J] <- Aux
      FimSe
   FimPara
FimPara
Para C <- 1 Ate 4 Faca
     Escreva ("(", V[C], ")")
FimPara
EscrevaL (" ")
EscrevaL ("-----------------------------")
fimalgoritmo
