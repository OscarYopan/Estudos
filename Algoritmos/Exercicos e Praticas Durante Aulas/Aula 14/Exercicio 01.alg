algoritmo "Tabela_De_Jogos"
// Função : Leia o nome de 3 times. e crie uma tabela de jogos entre eles que não inclua
// o mesmo time jogar contra sim mesmo
// Autor : Oscar Luis Yopan
// Data : 10/02/2022
var
T : Vetor [1..3] De Caractere
C : Inteiro
inicio
EscrevaL ("---------------------------------------")
EscrevaL ("           Tabela  de Jogos            ")
EscrevaL ("---------------------------------------")
Para C <- 1 Ate 3 Faca
   Escreva ("Time: ")
   Leia (T[C])
FimPara
Escreval ("-----")
EscrevaL (" ")
EscrevaL ("       C H A M P I O N S   C U P       ")
EscrevaL (" ")
EscrevaL (T[1]:15," VS ":10, T[2])
EscrevaL (T[1]:15," VS ":10, T[3])
EscrevaL (T[2]:15," VS ":10, T[1])
EscrevaL (T[2]:15," VS ":10, T[3])
EscrevaL (T[3]:15," VS ":10, T[1])
EscrevaL (T[3]:15," VS ":10, T[2])
EscrevaL ("---------------------------------------")
fimalgoritmo
