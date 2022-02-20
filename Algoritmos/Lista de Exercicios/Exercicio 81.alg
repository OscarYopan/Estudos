algoritmo "Analise_Idade_Vetor"
// Função : 81) Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
// final, mostre:
//        a) Qual é a média de idade das pessoas cadastradas
//        b) Em quais posições temos pessoas com mais de 25 anos
//        c) Qual foi a maior idade digitada (podem haver repetições)
//        d) Em que posições digitamos a maior idade
// Autor : Oscar Luis Yopan
// Data : 15/02/2022
// Seção de Declarações
var
Idade : Vetor [1..8] De Inteiro
Posicao : Vetor [1..8] De Inteiro
IT, I, C, MI, PMI : Inteiro
IM : Real
inicio
EscrevaL ("------------------------")
EscrevaL ("    Analise de Idade    ")
EscrevaL ("------------------------")
IT <- 0
MI <- 0
Para C <- 1 Ate 8 Faca
   Escreva ("Idade ", C, ": ")
   Leia (I)
   Idade[C] <- I
   IT <- IT + I
   Se I > 24 Entao
      Posicao[C] <- C
   FimSe
   Se I > MI Entao
      MI <- I
      PMI <- C
   FimSe
FimPara
IM <- (IT/8)
EscrevaL ("---------")
Escreva ("Posição Idade Mior 25: ")
Para C <- 1 Ate 8 Faca
     Escreva (Posicao[C])
FimPara
EscrevaL (" ")
EscrevaL ("Media de Idade: ", IM)
EscrevaL ("Maior Idade: ", MI)
EscrevaL ("Posicao Maior Idade", PMI)
EscrevaL ("------------------------")
fimalgoritmo
