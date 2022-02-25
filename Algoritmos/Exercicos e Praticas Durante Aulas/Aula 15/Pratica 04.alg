algoritmo "Matriz_4_Ordem_Analise"
// Função : Faca Um programa Para preencher uma matriz de Quarta Ordem e mostre:
//        A) A soma dos valores da diagonal principal;
//        B) O Produto dos Valores da segunda linha;
//        C) O maior valor da terceira coluna.
// Autor : Oscar Luis Yopán
// Data : 16/02/2022
var
M : Vetor [1..4, 1..4] De Inteiro
B, C, SDP, PL2, MV3C : Inteiro
inicio
EscrevaL ("-------------------------")
EscrevaL ("      Matriz Analise     ")
EscrevaL ("-------------------------")
SDP <- 0
PL2 <- 1
Mv3C <- 0
Para B <- 1 Ate 4 Faca
   Para C <- 1 Ate 4 Faca
      Escreva ("Numero: ")
      Leia (M[B, C])
      Se B = C Entao
         SDP <- SDP + M[B, C]
      FimSe
   FimPara
FimPara

EscrevaL (" ")
EscrevaL ("~~~~~~~~~~~~~~~~~~~~~~~~~")
EscrevaL ("          Matriz:        ")
EscrevaL ("~~~~~~~~~~~~~~~~~~~~~~~~~")

Para B <- 1 Ate 4 Faca
   Para C <- 1 Ate 4 Faca
      Escreva (M[B, C]:5)
   FimPara
   EscrevaL ()
FimPara

Para C <- 1 Ate 4 Faca
   PL2 <- PL2 * M[2, C]
FimPara

Para B <- 1 Ate 4 Faca
   Se (M[B, 3] > MV3C) Entao
      Mv3C <- M[B, 3]
   FimSe
FimPara

EscrevaL ("~~~~~~~~~~~~~~~~~~~~~~~~~")
EscrevaL ("Analise da Matriz:")
EscrevaL ("Soma da Diagonal Principal: ", SDP)
EscrevaL ("Produto da Segunda Linha: ", PL2)
EscrevaL ("Maior Valor da Terceira Coluna: ", MV3C)
EscrevaL ("-------------------------")
fimalgoritmo
