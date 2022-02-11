algoritmo "Levantamento_Peso_Idade_H_M"
// Função : 68) Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
//“para”. No final, mostre na tela:
//          a) Quantas mulheres foram cadastradas
//          b) Quantos homens pesam mais de 100Kg
//          c) A média de peso entre as mulheres
//          d) O maior peso entre os homens
// Autor : Oscar Luis Yopan
// Data : 04/02/2022
var
S : Caractere
P, H100, MPH, PMM, PMT : Real
M, C : Inteiro
inicio
EscrevaL ("====================================")
EscrevaL ("     Levantamento Idade e Peso      ")
EscrevaL ("====================================")
M <- 0
H100 <- 0
PMT <- 0
MPH <- 0
Para C <- 1 Ate 8 Faca
   Escreva ("Sexo [M/F]: ", C, ": ")
   Leia (S)
   Escreva ("Peso: ", C, ": ")}
   Leia (P)
   Se S = "F" Entao
      M <- M + 1
   FimSe
   Se (S = "M") e ( P > 99) Entao
      H100 <- H100 + 1
   FimSe
   Se (S = "F") Entao
      PMT <- PMT + P
   FimSe
   Se (S = "M") e (P > MPH) Entao
      MPH <- P
   FimSe
   EscrevaL ("------------")
FimPara
PMM <- (PMT / (M - 1))
EscrevaL ("Mukheres: ", M)
EscrevaL ("Homens Peso Superior a 100 kg: ", H100)
EscrevaL ("Media de Peso das Mulheres: ", PMM)
EscrevaL ("Maior Peso Entre os Homens> ", MPH)
EscrevaL ("====================================")
fimalgoritmo
