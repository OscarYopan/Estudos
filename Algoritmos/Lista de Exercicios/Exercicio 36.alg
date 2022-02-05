algoritmo "Saude_recompensa"
// Função :36) Um programa de vida saudável quer dar pontos atividades físicas que podem
//ser trocados por dinheiro. O sistema funciona assim:
//    - Cada hora de atividade física no mês vale pontos
//      - até 10h de atividade no mês: ganha 2 pontos por hora
//      - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
//      - acima de 20h de atividade no mês: ganha 10 pontos por hora
//    - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
// Autor : Oscar Luis Yopan
// Data : 27/01/2022
var
H, H1, H2, H3 : inteiro
D : real
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                     Vida Saudavel Recompensa                       ")
EscrevaL ("--------------------------------------------------------------------")
Escreva ("Qauntas Horas de Exervivio no Mês: ")
Leia (H)
EscrevaL ("--------------------------------------------------------")
Escolha (H)
Caso 1, 2, 3, 4, 5, 6, 7, 8, 9
   H1 <- (H * 2)
   D <- (H1 * 0.05)
   EscrevaL ("Voce fez: ", H1, " Pontos, e receberá: R$ ", D:6:2)
Caso 11, 12, 13, 14, 15, 16, 17, 18, 19
   H2 <- (H * 5)
   D <- (H2 * 0.05)
   EscrevaL ("Voce fez: ", H2, " Pontos, e receberá: R$ ", D:6:2)
Outrocaso
   H3 <- (H * 10)
   D <- (H3 * 0.05)
   EscrevaL ("Voce fez: ", H3, " Pontos, e receberá: R$ ", D:6:2)
FimEscolha
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
