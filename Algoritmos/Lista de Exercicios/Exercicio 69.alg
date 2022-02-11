algoritmo "Progressao_Aritmetica"
// Função : 69) [DESAFIO] Desenvolva um programa que leia o primeiro termo e o passo de uma
//PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
//a soma entre todos os valores da sequência.
// Autor : Oscar Luis Yopan
// Data : 04/02/2022
var
C, X, N, T : Inteiro
inicio
EscrevaL ("===================================")
EscrevaL ("       Progressao Aritmetica       ")
EscrevaL ("===================================")
Escreva ("Primeiro Termo: ")
Leia (X)
Escreva ("Passo: ")
Leia (N)
C <- 1
T <- 0
Repita
      EscrevaL (X)
      X <- X + N
      C <- C + 1
      T <- T + X
Ate (C = 11)
EscrevaL ("-------------")
EscrevaL ("Soma de Todos Numeros: ", T)
EscrevaL ("===================================")
// Seção de Comandos
fimalgoritmo
