algoritmo "Escolha_Borda"
// Função : 89) Crie um programa que melhore o procedimento Gerador() da questão anterior
//para que o programador possa escolher uma entre três bordas:
//+-------=======------+ Borda 1
//~~~~~~~~:::::::~~~~~~~ Borda 2
//<<<<<<<<------->>>>>>> Borda 3
//
//Ex: Uma chamada válida seria Gerador("Portugol Studio", 3, 2)
//~~~~~~~~:::::::~~~~~~~
//Portugol Studio
//Portugol Studio
//Portugol Studio
//~~~~~~~~:::::::~~~~~~~
// Autor : Oscar Luis Yopan
// Data : 08/02/2022
var
B : Inteiro
Procedimento Borda ()
Inicio
Escolha (B)
Caso 1
   EscrevaL ("+-------=======------+")
   EscrevaL (" Estudando Algoritmo! ")
   EscrevaL ("+-------=======------+")
Caso 2
   EscrevaL ("~~~~~~~~:::::::~~~~~~~")
   EscrevaL (" Estudando Algoritmo! ")
   EscrevaL ("~~~~~~~~:::::::~~~~~~~")
Caso 3
   EscrevaL ("<<<<<<<<------->>>>>>>")
   EscrevaL (" Estudando Algoritmo! ")
   EscrevaL ("<<<<<<<<------->>>>>>>")
OutroCaso
   EscrevaL ("Talvez na proxima!")
FimEscolha
FimProcedimento

Inicio
EscrevaL ("--------------------------------------")
EscrevaL ("               Qual Borda?            ")
EscrevaL ("--------------------------------------")
EscrevaL ("[1] +-------=======------+ ")
EscrevaL ("[2] ~~~~~~~~:::::::~~~~~~~ ")
EscrevaL ("[3] <<<<<<<<------->>>>>>> ")
Leia (B)
EscrevaL ("-----------")
EscrevaL (" ")
Borda ()
EscrevaL (" ")
EscrevaL ("--------------------------------------")
fimalgoritmo
