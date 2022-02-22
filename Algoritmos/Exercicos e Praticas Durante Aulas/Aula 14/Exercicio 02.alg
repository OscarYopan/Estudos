algoritmo "Corrigiindo Provas"
// Função : Crie um programa que leia as respostas da prova de um aluno, e corrija
// a prova de acordo com um gabarito.
// Autor : Oscar Luis Yopan
// Data : 10/02/2022
var
Gabarito : Vetor [1..5] De Caractere
Prova : Vetor [1..5] De Caractere
C, N, NT : Inteiro
M : Real
inicio
EscrevaL ("----------------------")
EscrevaL ("  Corretor de Provaa  ")
EscrevaL ("----------------------")
EscrevaL (" ")

EscrevaL ("Gabartiro da Prova")
EscrevaL (" ")
Para C <- 1 Ate 5 Faca
   Escreva ("Questao ", C, ": ")
   Leia (Gabarito[C])
FimPara
LimpaTela


Para C <- 1 Ate 4 Faca
   NT <- 0
   EscrevaL ("Prova Aluno: ", C, ": ")
   Para C <- 1 Ate 5 Faca
      N <- 0
      Escreva ("Questao ", C, ": ")
      Leia (Prova[C])
      Se Gabarito[1] = Prova[1] Entao
         N <- N + 2
      Fimse
      Se Gabarito[2] = Prova[2] Entao
         N <- N + 2
      Fimse
      Se Gabarito[3] = Prova[3] Entao
         N <- N + 2
      Fimse
      Se Gabarito[4] = Prova[4] Entao
         N <- N + 2
      Fimse
      Se Gabarito[5] = Prova[5] Entao
         N <- N + 2
      Fimse
      NT <- NT + N
   FimPara
   LimpaTela
FimPara
LimpaTela
M <- NT / 5
Para C <- 1 Ate 5 Faca
     EscrevaL ("Aluno ", C ": ", NT)
FimPara
EscrevaL ("Media da Turma: ", M)
Escreval ("----------------------")
fimalgoritmo
