algoritmo "Advinha_!0"
// Função : 55) [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de
//agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
//tentativas para tentar acertar.
// Autor : Oscar Luis Yopan
// Data : 01/02/2022
var
A, R, C : Inteiro
Inicio
EscrevaL ("-------------------------------------")
EscrevaL ("          Levantamento Peso          ")
EscrevaL ("-------------------------------------")
C <- 1
R <- Randi (10) + 1
Enquanto C < 5 Faca
   Escreva ("Advinhe um numero entre 1 e 10: ")
   Leia (A)
   EscrevaL ("---------")
   se (A) = (R) entao
      EscrevaL ("You WIN!")
   senao
      EscrevaL ("Errou!")
   fimse
   C <- C + 1
FimEnquanto
EscrevaL ("Acabou!")
EscrevaL ("-------------------------------------")
fimalgoritmo
