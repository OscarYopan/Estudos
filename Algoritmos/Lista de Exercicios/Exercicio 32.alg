algoritmo "Acerto_o_numero"
// Função :32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
//jogador vai tentar descobrir qual foi o valor sorteado.
// Autor : Oscar Luis Yopan
// Data : 21/01/2022
// Seção de Declarações
var
R, A : inteiro
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                        Jogo de Advinhar                            ")
EscrevaL ("--------------------------------------------------------------------")
Escreva ("Advinhe um numero entre 1 e 5: ")
Leia (A)
R <- Randi (5) + 1
EscrevaL (R)
EscrevaL ("------------------------------------")
se (A) = (R) entao
   EscrevaL ("You WIN!")
senao
   EscrevaL ("You Loose!")
fimse
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
