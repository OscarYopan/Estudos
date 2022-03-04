algoritmo "Fibonacci_Prodedimento"
// Função : 94) [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado
//Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
//termos da sequência serão mostrados na tela. O seu procedimento deve receber
//esse valor e mostrar a quantidade de elementos solicitados.
//Obs: Use os exercícios 70 e 75 para te ajudar na solução
//Ex:
//Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
//Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM
// Autor : Oscar Luis Yopan
// Data : 08/02/2022
var
I, T1, T2, T3: Inteiro
Procedimento ProximoFibonacci(var N1, N2: Inteiro)
Var
N3: Inteiro
Inicio
N3 <- N1 + N2
EscrevaL(N3)
N1 <- N2
N2 <- N3
FimProcedimento
inicio
EscrevaL ("-------------------------------")
EscrevaL ("      Sequencia Fibonacci      ")
EscrevaL ("-------------------------------")
T1 <- 0
EscrevaL(T1)
T2 <- 1
EscrevaL(T2)
Para I <- 3 ate 10 faca
   ProximoFibonacci(T1, T2)
FimPara
EscrevaL ("--------------------------------")
fimalgoritmo
