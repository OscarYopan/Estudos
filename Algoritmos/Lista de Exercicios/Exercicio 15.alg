algoritmo "E-15"
// Função :Crie um programa que leia o número de dias trabalhados em um mês e mostre o
//salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
//por hora trabalhada
// Autor : Oscar Luis Yopan
// Data : 14/09/2021
// Seção de Declarações 
var
D, H, SH, SD, SF: real
inicio
Escreva
Escreva ("Informe dias trabalhados: ")
Leia (D)
H <- 8
SH <- 25
SD <- H*SH
SF <- D*SD
Escreva  ("Salario do Mês: R$", SF)
fimalgoritmo
