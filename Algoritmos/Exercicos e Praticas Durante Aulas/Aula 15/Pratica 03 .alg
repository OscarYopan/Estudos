algoritmo "Matriz_Identidade"
// Função : Criar uma Matriz de Identidade de terceira ordem.
// Autor : Oscar Luis Yopan
// Data : 16/02/2022
var
M : Vetor [1..3, 1..3] De Inteiro
B, C : Inteiro
inicio
EscrevaL ("-----------------------------")
EscrevaL ("      Matriz Identidade      ")
EscrevaL ("-----------------------------")
Para B <- 1 Ate 3 Faca
   Para C <- 1 Ate 3 Faca
      Se B = C Entao
         M[B, C] <- 1
      Senao
         M[B, C] <- 0
      FimSe
   FimPara
FimPara

Para B <- 1 Ate 3 Faca
   Para C <- 1 Ate 3 Faca
      Escreva (M[B, C]:8)
   FimPara
   EscrevaL ()
FimPara
EscrevaL ("  ")
EscrevaL ("-----------------------------")
fimalgoritmo
