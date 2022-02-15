algoritmo "È_Primo?"
// Função : Verificar se um numero é ou não primo
// Autor : Oscar Luis Yopan
// Data : 28/01/2022
var
C, F, N : Inteiro
P : Caractere
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                              Fatorial                              ")
EscrevaL ("--------------------------------------------------------------------")
Repita
   Escreva ("Numro: ")
   Leia (N)
   C <- 1
   F <- 1
   Repita
      Se ((N % N)= 0) Entao
         EscrevaL ("É um numero Primo!")
      SeNao
         EscrevaL ("Não é um numero Primo!")
      FimSe
      F <- (F * C)
      C <- (C - 1)
   Ate (C < 1)
   Escreva ("Gostaria de Verificar Mais? [S/N]: ")
   Leia (P)
   LimpaTela
Ate (P = "N")
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
