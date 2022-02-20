algoritmo "Analisador_Caractere"
// Função : Faca um programa que exiba as informações relativas ao caraxtere pedido,
// e que use todas as funções padroes do VisualG.
// Autor : Oscar Luis Yopan
// Data : 07/02/2022
var
N : Caractere
C : Inteiro
inicio
EscrevaL ("-------------------------")
EscrevaL (" Analisador de Caractere ")
EscrevaL ("-------------------------")
Escreva ("Palavra: ")
Leia (N)
EscrevaL ("-------")
EscrevaL ("TOtal de Letras: ", Compr (N))
EscrevaL ("Em Maisculo: ", Maiusc (N))
EscrevaL ("Em Minusculo: ", Minusc (N))
EscrevaL ("Primeira Letra: ", Copia (N, 1, 1))
EscrevaL ("Ultima Letra: ", Copia (N, Compr(N), 1))
EscrevaL ("Codigo Peimeira letra: ", Asc (Copia(N, 1, 1)))
Escreva ("Invertido: ")
Para C <- Compr(N) Ate 1 Passo -1 Faca
     Escreva (Copia(Maiusc(N), C, 1))
FimPara
EscrevaL (" ")
EscrevaL ("-------------------------")
fimalgoritmo
