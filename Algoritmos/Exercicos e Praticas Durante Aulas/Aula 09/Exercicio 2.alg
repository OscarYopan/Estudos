algoritmo "Melhor Aluno"
// Função : Descobrir o nome a nota de "x" Alunos, e identificar o melhor aluno.
// Autor : Oscar Luis Yopan
// Data : 25/01/2022
var
C, Q : inteiro
A, MA : Caractere
N, MN : real
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                           Melhor Aluno                             ")
EscrevaL ("--------------------------------------------------------------------")
Escreva ("Quantos Alunos?: ")
Leia (Q)
EscrevaL ("------------------------------")
C <- 1
Enquanto (C <= Q) faca
   EscrevaL ("Nome do Aluno: ", C)
   Escreva  ("Nome do Aluno: ")
   Leia (A)
   Escreva ("Nota: ")
   Leia (N)
   EscrevaL ("----------")
   Se (N > MN) entao
      MN <- N
      MA <- A
   FimSe
   C <- (C + 1)
FimEnquanto
EscrevaL ("------------------------------")
EscrevaL ("O Melhor Aluno é: ", MA)
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
