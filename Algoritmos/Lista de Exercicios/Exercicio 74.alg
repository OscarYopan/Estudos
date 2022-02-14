algoritmo "P.A._3_e_5"
// Função : 74) Crie um programa que preencha automaticamente (usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
//           5 3 5 3 5 3 5 3 5 3
//           0 1 2 3 4 5 6 7 8 9
// Autor : Oscar Luis Yopan
// Data : 14/02/2022
var
N : Vetor [1..10] De Inteiro
C, V : Inteiro
inicio
EscrevaL ("-------------------------")
EscrevaL ("        P.A. 3 e 5       ")
EscrevaL ("-------------------------")
V <- 3
Para C <- 1 Ate 10 Faca
     Se (V < 6) e (V > 4) Entao
        V <- V - 2
     FimSe
     Se (V > 2) e (V < 4) Entao
        V <- V + 2
     FimSe
     N[C] <- V
     Escreva (N[C])
FimPara
EscrevaL (" ")
EscrevaL ("-------------------------")
fimalgoritmo
