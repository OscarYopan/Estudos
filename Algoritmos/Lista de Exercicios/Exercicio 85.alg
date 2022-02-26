algoritmo "Salario_mulheres"
// Função :85) Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
// guarde esses dados em três vetores. No final, mostre uma listagem contendo
// apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.
// Autor : Oscar Luis Yopan
// Data : 15/02/2022
var
Nome : Vetor [1..5] De Caractere
Sexo : Vetor [1..5] De Caractere
Sal : Vetor [1..5] De Real
C : Inteiro
inicio
EscrevaL ("-----------------------")
EscrevaL ("    Salario Mulheres   ")
EscrevaL ("-----------------------")
Para C <- 1 Ate 5 Faca
   Escreva ("Funcionario: ")
   Leia (Nome[C])
   Escreva ("Sexo: ")
   Leia (Sexo[C])
   Escreva ("Salario: ")
   Leia (Sal[C])
   LimpaTela
FimPara
EscrevaL ("~~~~~~~~~~~~~~~~~~~~~~~")
EscrevaL ("      Mulheres 5k      ")
EscrevaL ("~~~~~~~~~~~~~~~~~~~~~~~")
Para C <- 1 Ate 5 Faca
   Se (Sal[C] > 4999) e (Sexo[C] = "F") Entao
      Escreva ("Nome: ", Nome[C]:15)
      Escreva ("Sexo: ", Sexo[C]:10)
      EscrevaL ("Salario: R$", Sal[C])
   FimSe
FimPara
EscrevaL ("-----------------------")
fimalgoritmo
