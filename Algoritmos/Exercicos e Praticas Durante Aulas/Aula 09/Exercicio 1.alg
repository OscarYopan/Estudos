algoritmo "Contagem_Inteligente"
// Função : Contar regressivamente ou progressivamente, automaricamente entre 2 numerais
// Autor : Oscar LuIS Yopan
// Data : 25/01/2022
var
C, I, F : inteiro
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                       Contagem Inteligente                         ")
EscrevaL ("--------------------------------------------------------------------")
Escreva ("Qual o Incio: ")
Leia (I)
Escreva ("Qual o FIm: ")
Leia (F)
EscrevaL ("-----------------------")
C <- I
Se (I < F)  entao
   Enquanto (C < F) faca
      C <- (C + 1)
      EscrevaL (C)
   FimEnquanto
senao
     C <- I
      Enquanto (C > F) faca
         C <- (C - 1)
         EscrevaL (C)
      FimEnquanto
FimSe
EscrevaL ("-----------------------")
EscrevaL ("Fim da Contagem!")
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
