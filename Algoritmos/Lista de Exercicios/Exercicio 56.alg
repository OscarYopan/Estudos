algoritmo "Somatorio"
// Função : 56) Crie um programa que leia vários números pelo teclado e mostre no final o
//somatório entre eles.
//Obs: O programa será interrompido quando o número 1111 for digitado
// Autor : Oscar Luis Yopan
// Data : 01/02/2022
var
C, N, T : Inteiro
R : Caractere
inicio
EscrevaL ("-------------------------------------------")
EscrevaL ("               Some Numerais               ")
EscrevaL ("-------------------------------------------")
C <- 1
T <- 0
Repita
   Escreva ("Valor ", C, ": ")
   Leia (N)
   EscrevaL ("Quer Somar Mais? [S/N]: ")
   Leia (R)
   C <- (C + 1)
   T <- (T + N)
Ate (R = "N")
EscrevaL ("-------------")
EscrevaL ("A soma total dos Valores é: ", T)
EscrevaL ("-------------------------------------------")
fimalgoritmo
