algoritmo "Levantamento_Nome_Idade_Sexo"
// Função : 60) Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
//O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
//           a) O nome da pessoa mais velha
//           b) O nome da mulher mais jovem
//           c) A média de idade do grupo
//           d) Quantos homens tem mais de 30 anos
//           e) Quantas mulheres tem menos de 18 anos
// Autor : Oscar Luis Yopan
// Data : 02/02/2022
var
C, I, IT, HT, IV, II, IJ, MT : Inteiro
IM : Real
R, S, N, NV, NJ: Caractere
inicio
EscrevaL ("--------------------------------------------")
EscrevaL ("      Levantamento Nome Sexo e Idade        ")
EscrevaL ("--------------------------------------------")
C <- 1
IT <- 0
HT <- 0
II <- 0
IJ <- 150
MT <- 0
Repita
   Escreva ("Nome ", C, ": ")
   Leia (N)
   Escreva ("Sexo [M/F] ", C, ": ")
   Leia (S)
   Escreva ("Idade ", C, ": ")
   Leia (I)
   Escreva ("Mais? [S/N]: ")
   Leia (R)
   C <- (C + 1)
   Se (I > II) e (I > IV) Entao
      IV <- I
      NV <- N
   FimSe
   IT <- IT + I
   Se (I < 200) e (S = "F") e (I < IJ) Entao
      IJ <- I
      NJ <- N
   FimSe
   Se (S = "M") e ( I > 29) Entao
      HT <- HT + 1
   FimSe
   Se (S = "F") e (I < 18) Entao
      MT <- MT + 1
   FimSe
   EscrevaL ("---------")
Ate (R = "N")
IM <- (IT / (C - 1))
EscrevaL ("-------------")
EscrevaL ("Maior Idade: ", NV)
EscrevaL ("Mulher Idade Mais Jovem: ", NJ)
EscrevaL ("Media de Idade: ", IM)
EscrevaL ("Total de Homens Mais de 30 Anos: ", HT)
EscrevaL ("Total de Mulheres Menor de Idade: ", MT)
EscrevaL ("--------------------------------------------")
fimalgoritmo
