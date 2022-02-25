algoritmo "Matriz_Basico"
// Função : Crie Um programa que pencha de numeros inteiros uma matriz de
// 3 linhas e 2 colunas.
// Autor : Oscar Luis Yopan
// Data : 16/02/2022
var
M : Vetor[1..3, 1..2] De Inteiro
C, D : Inteiro
inicio
EscrevaL ("---------------------")
EscrevaL (" Preencha uma Matriz ")
EscrevaL ("---------------------")
Para D <- 1 Ate 3 Faca
   Para C <- 1 Ate 2 Faca
      Escreva ("Numero: ")
      Leia (M[D, C])
   FimPara
FimPara
EscrevaL (" ")
EscrevaL ("~~~~~~~~~~~~~")
EscrevaL ("   Matriz M  ")
EscrevaL ("~~~~~~~~~~~~~")
Para D <- 1 Ate 3 Faca
   Para C <- 1 Ate 2 Faca
      Escreva (M[D, C]:8)
   FimPara
   EscrevaL ()
FimPara
EscrevaL ("---------------------")
fimalgoritmo
