algoritmo "Identificador_Menor_Idade"
// Função : 84) Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
// valores em dois vetores, em posições relacionadas. No final, mostre uma listagem
// contendo apenas os dados das pessoas menores de idade.
// Autor : Oscar Luis Yopan
// Data : 15/02/2022
// Seção de Declarações
var
Nome : Vetor [1..9] De Caractere
Idade : Vetor [1..9] De Inteiro
C : Inteiro
inicio
EscrevaL ("---------------------------------")
EscrevaL ("   Indicador de Menor de Idade   ")
EscrevaL ("---------------------------------")
Para C <- 1 Ate 9 Faca
   Escreva ("Nome: ")
   Leia (Nome[C])
   Escreva ("Idade: ")
   Leia (Idade[C])
   LimpaTela
FimPara
EscrevaL ("~~~~~~~~~~~~~~~~~~~~~~~~~~")
EscrevaL ("Lista de Menosres de Idade")
EscrevaL ("~~~~~~~~~~~~~~~~~~~~~~~~~~")
Para C <- 1 Ate 9 Faca
   Se Idade[C] < 18 Entao
      Escreva ("Nome: ", Nome[C]:15)
      EscrevaL ("Idade: ", Idade[C])
   FimSe
FimPara
EscrevaL ("--------------------------")
fimalgoritmo
