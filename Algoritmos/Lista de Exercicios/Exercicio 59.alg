algoritmo "Levantamento_Sexo_Idade"
// Função : 59) Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
//perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
//          a) qual é a maior idade lida
//          b) quantos homens foram cadastrados
//          c) qual é a idade da mulher mais jovem
//          d) qual é a média de idade entre os homens
// Autor : Oscar Luis Yopan
// Data : 02/02/2022
var
C, I, IT, HT, IV, II, IJ : Inteiro
IM : Real
R, S : Caractere
inicio
EscrevaL ("--------------------------------------------")
EscrevaL ("         Levantamento Sexo e Idade          ")
EscrevaL ("--------------------------------------------")
C <- 1
IT <- 0
HT <- 0
II <- 0
IJ <- 150
Repita
   Escreva ("Sexo [M/F] ", C, ": ")
   Leia (S)
   Escreva ("Idade ", C, ": ")
   Leia (I)
   EscrevaL ("Mais? [S/N]: ")
   Leia (R)
   C <- (C + 1)
   Se (I > II) e (I > IV) Entao
      IV <- I
   FimSe
   Se (S = "M") Entao
      IT <- IT + I
      HT <- HT + 1
   FimSe
   Se (I < 200) e (S = "F") e (I < IJ) Entao
      IJ <- I
   FimSe
   EscrevaL ("---------")
Ate (R = "N")
IM <- (IT / (C - 1))
EscrevaL ("-------------")
EscrevaL ("Maior Idade: ", IV)
EscrevaL ("Total de Homens: ", HT)
EscrevaL ("Mulher Idade Mais Jovem: ", IJ)
EscrevaL ("Media de Idade enre Homens: ", IM)
EscrevaL ("--------------------------------------------")
fimalgoritmo
