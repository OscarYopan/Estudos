algoritmo "Fibonacci_Vetor"
// Função : 75) Crie um programa que preencha automaticamente (usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 15 posições com os primeiros
//elementos da sequência de Fibonacci:
//          1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
//          0 1 2 3 4 5 6  7  8  9  10 11  12  13  14  15
// Autor : Oscar Luis Yopan
// Data : 14/02/2022
// Seção de Declarações 
vaR
F : Vetor[0..17] De Inteiro
C, A, B, S : Inteiro
inicio
EscrevaL ("===============================")
EscrevaL ("      Sequencia Fibonacci      ")
EscrevaL ("===============================")
A <- 0
Escreva (A)
B <- 1
Escreva (B)
Para C <- 3 Ate 17 Passo 1 Faca
   S <- A + B
   F[C] <- S
   Escreva (F[c])
   A <- B
   B <- S
FimPara
EscrevaL(" ")
EscrevaL ("================================")
fimalgoritmo
inicio
// Seção de Comandos 
fimalgoritmo
