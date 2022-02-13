algoritmo "Conversão de Moeda repetidas vezes"
// Função : Converte real em dolar, quantas vezes o usuario solicitar
// Autor : Oscar Luis Yopan
// Data : 25/01/2022
var
C, Q : inteiro
R, D : real
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                           Real - Dolar                             ")
EscrevaL ("--------------------------------------------------------------------")
Escreva ("Quantas Conversões?: ")
Leia (Q)
C <- 0
Enquanto (C < Q) faca
         Escreva ("Valor em Real: R$ ")
         Leia (R)
         D <- (R / 5.50)
         EscrevaL ("Conversão em Dolar: R$ ", D:8:2)
         C <- (C + 1)
FimEnquanto
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
