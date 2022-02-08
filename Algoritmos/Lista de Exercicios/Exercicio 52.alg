algoritmo "Media_De_Idade"
// Função : 52) Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
//        a) Qual é a média de idade do grupo
//        b) Quantas pessoas tem mais de 18 anos
//        c) Quantas pessoas tem menos de 5 anos
//        d) Qual foi a maior idade lida
// Autor : Oscar Luis Yopan
// Data : 30/01/2022
// Seção de Declarações 
var
C, I, IT : Inteiro
IM : Real
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                            Idade Media                             ")
EscrevaL ("--------------------------------------------------------------------")
C <- 1
Repita
      Escreva ("Idade ", C, ": ")
      Leia (I)
      C <- (C + 1)
      IT <- (IT + I)
Ate (C = 11)
IM <- (IT / 10)
EscrevaL ("-------------")
EscrevaL ("A idade Média é: ", IM, " Anos.")
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
