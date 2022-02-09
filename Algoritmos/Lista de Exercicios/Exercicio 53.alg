algoritmo "Levantamento"
// Função : 53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
//                a) Quantos homens foram cadastrados
//                b) Quantas mulheres foram cadastradas
//                c) A média de idade do grupo
//                d) A média de idade dos homens
//                e) Quantas mulheres tem mais de 20 anos
// Autor : Oscar Luis Yopan
// Data : 30/01/2022
var
C, I, IT, H, IH, M : Inteiro
N, S : Caractere
IM, IMH : Real
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                             Levantamento                           ")
EscrevaL ("--------------------------------------------------------------------")
C <- 1
Enquanto (C < 6) Faca
   Escreva ("Nome: ")
   Leia (N)
   Escreva ("Sexo: ")
   Leia (S)
   Escreva ("Idade: ")
   Leia (I)
   C <- (C + 1)
   IT <- (IT + I)
   Se (S = "M") Entao
      H <- (H + 1)
      IH <- (IH + I)
   FimSe
   Se (S = "F") Entao
      M <- (M + 1)
   FimSe
   Se (S = "F") e (I >= 20) Entao
      IM <- (IM +1)
   FimSe
   LimpaTela
FimEnquanto
EscrevaL ("----------------")
IM <- (IT / 9)
IMH <- (IH / H)
EscrevaL ("Idade Media: ", IM)
EscrevaL ("Meadia de Idade Homens: ", IMH)
EscrevaL ("Mulher Mais de 20 anos: ", IM)
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
