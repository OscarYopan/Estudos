algoritmo "Analise_Numerica"
// Função : 63) Crie um programa usando a estrutura “faça enquanto” que leia vários números.
//A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na
//tela:
//       a) O somatório entre todos os valores
//       b) Qual foi o menor valor digitado
//       c) A média entre todos os valores
//       d) Quantos valores são pares
// Autor : Oscar Luis Yopan
// Data : 03/02/2022
var
C, N, MN, P, T : Inteiro
R : Caractere
M : Real
inicio
EscrevaL ("=====================================")
EscrevaL ("          Analise Numerica           ")
EscrevaL ("====================================-")
C <- 1
T <- 0
MN <- (999999)
P <- 0
Enquanto (R <> "N") Faca
   Escreva ("Numero ", C, ": ")
   Leia (N)
   Escreva("Analisar Mais?: [S/N]")
   Leia (R)
   EscrevaL ("---------")
   Se N < MN entao
      MN <- N
   FimSe
   Se (N % 2 = 0) Entao
      P <- P +1
   FimSe
   T <- T + N
   C <- C + 1
FimEnquanto
M <- ( T / (C - 1))
EscrevaL ("Somatorio: ", T)
EscrevaL ("Menor Numero: ", MN)
Escreval ("Media: ", M)
EscrevaL ("Quantos Pares: ", P)
EscrevaL ("=====================================")
fimalgoritmo
