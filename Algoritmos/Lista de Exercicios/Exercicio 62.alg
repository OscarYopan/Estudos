algoritmo "Maiores_21_Anos"
// Função : 62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de
//várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
//não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
//na tela:
//        a) Quantas idades foram digitadas
//        b) Qual é a média entre as idades digitadas
//        c) Quantas pessoas tem 21 anos ou mais.
// Autor : Oscar Luis Yopan
// Data : 03/02/2022
var
C, I, IT, M21 : Inteiro
R : Caractere
IM : Real
inicio
EscrevaL ("-------------------------------------------")
EscrevaL ("      Levantamento Maiores de 21 Anos      ")
EscrevaL ("-------------------------------------------")
C <- 1
IT <- 0
M21 <- 0
R <- ("S")
Enquanto (R = "S") Faca
   Escreva ("Idade ", C, ": ")
   Leia (I)
   Escreva ("Adicionar Mais: [S/N]")
   Leia (R)
   EscrevaL ("---------")
   C <- C + 1
   IT <- IT + I
   Se I > 20 Entao
      M21 <- M21 + 1
   FimSe
FimEnquanto
IM <- (IT / (C - 1))
EscrevaL ("Idades Avaliadas: ", C - 1)
EscrevaL ("Media de Idade: ", IM)
EscrevaL ("Maiores de 21 Anos: ", M21)
EscrevaL ("--------------------------------------------")
fimalgoritmo
