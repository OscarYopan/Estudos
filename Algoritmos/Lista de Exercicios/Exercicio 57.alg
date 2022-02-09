algoritmo "Salario_H/M"
// Função : 57) Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
//No final, mostre o total de salários pagos aos homens e o total pago às
//mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
//sempre que ler os dados de um funcionário.
// Autor : Oscar Luis Yopan
// Data : 01/02/2022
var
C : Inteiro
S, R : Caractere
N, SH, SF : Real
inicio
EscrevaL ("-------------------------------------------")
EscrevaL ("               Some Salarios               ")
EscrevaL ("-------------------------------------------")
C <- 1
SH <- 0
SF <- 0
Repita
   Escreva ("Salario ", C, ": ")
   Leia (N)
   Escreva ("Sexo [M/F]: ")
   Leia (S)
   EscrevaL ("Quer Avaliar mais? [S/N]: ")
   Leia (R)
   C <- (C + 1)
   Se (S = "M") Entao
      SH <- SH + N
   FimSe
   Se (S = "F") Entao
      SF <- SF + N
   FimSe
   EscrevaL ("---------")
Ate (R = "N")
EscrevaL ("-------------")
EscrevaL ("Salario Homens: ", SH)
EscrevaL ("Salario Mulheres: ", SF)
EscrevaL ("-------------------------------------------")
fimalgoritmo
