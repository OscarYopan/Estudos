algoritmo ">e<_preco"
// Função : 51) Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
//qual foi o maior e qual foi o menor preço digitados.
// Autor : Oscar Luis Yopan
// Data : 30/01/2022
var
C, MEC : Inteiro
P, MA, ME, MEN : Real
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                     Qual o Menor e Maior Preço                     ")
EscrevaL ("--------------------------------------------------------------------")
C <- 1
ME <- 100000000000
MA <- 0
Repita
   Escreva ("Produto ", C, ": ")
   Leia (P)
   MEN <- P
   C <- (C + 1)
   Se (P < ME) Entao
      ME <- P
      MEC <- C
   FimSe
   Se (P > MA) Entao
      MA <- P
   FimSe
Ate (C = 9)
EscrevaL ("------------------")
EscrevaL ("Produto de Menor Preço: ", ME:6:2)
EscrevaL ("Produto de Maior Preço: ", MA:6:2)
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
