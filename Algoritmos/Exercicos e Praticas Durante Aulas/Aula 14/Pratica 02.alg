algoritmo "Listagem_Turma"
// Função : Fazer um programa que faça a gestão da lista de uma turma, usando vetores.
// Este programa vai solicitar o nome e duas notas de cada aluno e no final mostra uma
// lista com a media de cada aluno.
// Autor : Oscar Luis Yopan
// Data : 10/02/2022
var
A : Vetor [1..5] De Caractere
N1 : Vetor [1..5] De Real
N2 : Vetor [1..5] De Real
M : Vetor [1..5] De Real
C : Inteiro
inicio
EscrevaL ("-----------------------")
EscrevaL ("      Turma Louca      ")
EscrevaL ("-----------------------")
Para C <- 1 Ate 5 Faca
     Escreva ("Nome do Aluno ", C, ": ")
     Leia (A[C])
     Escreva ("Nota 1: ")
     Leia (N1[C])
     Escreva ("Nota 2: ")
     Leia (N2[C])
     M[C] <- ((N1[C] + N2[C]) / 2)
     LimpaTela
FimPara
EscrevaL ("~~~~~~~~~~~~~~~~~~~~~~~~")
EscrevaL ("      Notas Finais      ")
EscrevaL ("    Turma Louca 2022    ")
EscrevaL ("~~~~~~~~~~~~~~~~~~~~~~~~")
Para C <- 1 Ate 5 Faca
      EscrevaL (A[C]:18, M[C]:4:2)
FimPara
EscrevaL ("------------------------")
fimalgoritmo
