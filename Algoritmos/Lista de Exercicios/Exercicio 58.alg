algoritmo "Media_Idade_Alunos"
// Função : 58) Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
//vai parar quando for digitada a idade 999. No final, mostre quantos alunos
//existem na turma e qual é a média de idade do grupo.
// Autor : Oscar Luis Yopan
// Data : 01/02/2022
var
C, I, IT : Inteiro
IM : Real
R : Caractere
inicio
EscrevaL ("-------------------------------------------")
EscrevaL ("          Media Idade dos Alunos           ")
EscrevaL ("-------------------------------------------")
C <- 1
IT <- 0
Repita
   Escreva ("Idade Aluno ", C, ": ")
   Leia (I)
   EscrevaL ("Mais Aluno? [S/N]: ")
   Leia (R)
   C <- (C + 1)
   IT <- IT + I
   EscrevaL ("---------")
Ate (R = "N")
IM <- (IT / (C - 1))
EscrevaL ("-------------")
EscrevaL ("Alunos: ", C - 1)
EscrevaL ("Media de Idade: ", IM)
EscrevaL ("-------------------------------------------")
fimalgoritmo
