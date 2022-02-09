algoritmo "Peso_Altura_Levantamento"
// Função : 54) Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
//no final:
//         a) Qual foi a média de altura do grupo
//         b) Quantas pessoas pesam mais de 90Kg
//         c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
//         d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.
// Autor : Oscar Luis Yopan
// Data : 01/02/2022
var
C, A2, A3 : Inteiro
P, A, P90, AM, AT : Real
inicio
EscrevaL ("-------------------------------------")
EscrevaL ("          Levantamento Peso          ")
EscrevaL ("-------------------------------------")
C <- 1
AT <- 0
P90 <- 0
A2 <- 0
A3 <- 0
Enquanto C < 8 Faca
   Escreva ("Peso ", C, ": ")
   Leia (P)
   Escreva ("Altura ", C, ": ")
   Leia (A)
   Se (P >= 90) Entao
      P90 <- P90 + 1
   FimSe
   Se (P < 50) e (A < 1.60) entao
      A2 <- A2 +1
   FimSe
   Se (P >= 100) e (A >= 1.90) Entao
      A3 <- A3 + 1
   Fimse
   C <- C + 1
   AT <- AT + A
   LimpaTela
FimENquanto
AM <- AT / 7
EscrevaL ("Media Altura: ", AM)
EscrevaL ("Mais 90 kg: ", P90)
EscrevaL ("Peso Menor 50kg e Altura inferior a 1,60M: ", A2)
EscrevaL ("Peso Superior a 100kg e Altura Superior a 1,90: ", A3)
EscrevaL ("-------------------------------------")
fimalgoritmo
