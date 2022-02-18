algoritmo "Numeros_Pares_Regressiva"
// Função : Faça um algoritmo que mostre quais são numeros pares, de modo regressivo.
// Autor : Oscar Luis Yopan
// Data : 31/01/2022
var
C, N : inteiro
inicio
EscrevaL ("------------------------------------")
EscrevaL ("           Numeros Pares            ")
EscrevaL ("------------------------------------")
Escreva ("Pares Até: ")
Leia (N)
Se (N % 2 = 1) Entao
   N <- N - 1
FimSe
Para C <- N Ate 0 Passo -2 Faca
   EscrevaL (C)
FimPara
EscrevaL ("Acabou!")
EscrevaL ("------------------------------------")
fimalgoritmo
