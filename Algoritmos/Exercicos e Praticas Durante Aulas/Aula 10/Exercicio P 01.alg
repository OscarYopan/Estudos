algoritmo "Menu_Contadores"
// Função : Algoritmo para criar um contador atraves de menus.
// Autor : Oscar Luis Yopan
// Data : 28/01/2022
// Seção de Declarações
var
O, C, C2 : Inteiro
inicio
Repita
   EscrevaL (" ")
   EscrevaL ("_________________")
   EscrevaL ("|      MENU     |")
   EscrevaL ("-----------------")
   EscrevaL ("| [1] de 1 a 10 |")
   EscrevaL ("| [2] de 10 a 1 |")
   EscrevaL ("| [3] Sair      |")
   Escreval ("_________________")
   Leia (O)
   EscrevaL ("------------------------------")
   C <- 1
   C2 <- 10
   Escolha O
   Caso 1
      Repita
         Escreva (C)
         C  <- (C + 1)
      Ate (C > 10)
   Caso 2
      Repita
         Escreva (C2)
         C2 <- (C2 - 1)
      Ate (C2 < 1)
   Caso 3
      EscrevaL ("Saindo...")
   OutroCaso
      EscrevaL ("Invalido")
   FimEscolha
Ate (O = 3)
EscrevaL ("------------------------------")
fimalgoritmo
