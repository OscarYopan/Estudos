algoritmo "Soma_da_Contagem"
// Função : 46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
//8 + 10 + 12 + 14 + ... + 98 + 100.
// Autor : Oscar Luis Yopan
// Data : 27/01/2022
var
C, T : inteiro
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                         Soma Todos Numerais                        ")
EscrevaL ("--------------------------------------------------------------------")
C <- 1
T <- 0
Enquanto (C <= 100) faca
         C <- (C + 2)
         T <- (T + C)
FimEnquanto
EscrevaL ("-----------------------------------------")
EscrevaL ("A soma total dos Valores é: ", T)
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
