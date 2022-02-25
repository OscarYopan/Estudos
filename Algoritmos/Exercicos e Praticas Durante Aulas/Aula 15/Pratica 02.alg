algoritmo "Matriz_Pares"
// Função : Crie uma matriz 3z3, que leia numeros inteiros e indentifique quais
// sao pares.
// Autor : Oscar Luis Yopan
// Data : 16/02/2022
// Seção de Declarações
var
M : Vetor [1..3, 1..3] De Inteiro
C, B, P : Inteiro
inicio
EscrevaL ("---------------------------")
EscrevaL ("  Numeros Pares da Matriz  ")
EscrevaL ("---------------------------")
P <- 0
Para C <- 1 Ate 3 Faca
   Para B <- 1 Ate 3 Faca
      Escreva ("Numero: ")
      Leia (M[C, B])
   FimPara
FimPara
EscrevaL (" ")
EscrevaL ("~~~~~~~~~~~~~~~~~~~~~~")
EscrevaL ("   Numeros Pares {}   ")
EscrevaL ("~~~~~~~~~~~~~~~~~~~~~~")
Para C <- 1 Ate 3 Faca
   Para B <- 1 Ate 3 Faca
      Se (M[C, B] % 2 = 0) Entao
         Escreva ("{",M[C, B], "}")
         P <- P + 1
      senao
         Escreva (M[C, B])
      FimSe
   FimPara
   EscrevaL()
FimPara
EscrevaL ("------------")
EscrevaL ("Total de Numeros Pares: ", P)
EscrevaL ("--------------------------")
fimalgoritmo
