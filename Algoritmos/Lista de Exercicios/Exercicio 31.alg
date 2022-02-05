algoritmo "JoKenPo"
// Função : 31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
// Autor : Oscar Luis Yopan
// Data : 20/01/2022
// Seção de Declarações
var
P1, P2, V : inteiro
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                       Bora jogar JoKenPo                           ")
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("[1] - Pedra")
EscrevaL ("[2] - Papel")
EscrevaL ("[3] - Tesoura")
Escreva ("Player 1 - jogue: ")
Leia (P1)
Escreva ("Player 2 - Jogue: ")
Leia (P2)
Escreval ("----------------------------")
se (P1 = 1) e (P2 = 1) entao
   EscrevaL ("Empate!")
senao
   se (P1 = 1) e (P2 = 2) entao
      escrevaL ("Player 2 Ganhou!")
   senao
      se (P1 = 1) e (P2 = 3) entao
         EscrevaL ("Player 1 Ganhou!")
      senao
           se (P1 = 2) e (P2 = 2) entao
              EscrevaL ("Empate!")
           senao
                se (P1 = 2) e (P2 = 1) entao
                   EscrevaL ("Player 1 Ganhou!")
                senao
                     se (P1 = 2) e (P2 = 3) entao
                        EscrevaL ("Player 2 Ganhou!")
                     senao
                          se (P1 = 3) e (P2 = 3) entao
                             EscrevaL ("Empate!")
                          senao
                               se (P1 = 3) e (P2 = 1) entao
                                  EscrevaL ("Player 2 Ganhou!")
                               senao
                                    se (P1 = 3) e (P2 = 2) entao
                                       EscrevaL ("Player 1 Ganhou!")
                                    fimse
                               fimse
                          fimse
                     fimse
                fimse
           fimse
      fimse
   fimse
fimse
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
