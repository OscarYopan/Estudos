algoritmo "Fatorial_Funcao"
// Função : Crie um programa que leia e fatue um numero, usando Funcao
// Autor: Oscar Luis Yopan
// Data : 07/02/2022
var
N, F : Inteiro

Funcao Fatorial (X : Inteiro) : Inteiro
Var
C, R : Inteiro
Inicio
R <- 1
Para C <- 1 Ate X Faca
   R <- R * C
FimPara
Retorne R
FimFuncao

Inicio
Escreva ("Numero: ")
Leia (N)
F <- Fatorial (N)
EscrevaL ("Ftorial de ", N, " è: ", F)
fimalgoritmo
