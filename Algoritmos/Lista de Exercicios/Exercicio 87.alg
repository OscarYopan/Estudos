algoritmo "Estudando_ALgoritmo_Procedimento"
// Função : 87) Crie um programa que melhore o procedimento Gerador() da questão anterior
//para que mostre uma mensagem personalizada, passada como parâmetro.
//Ex: Ao chamar Gerador("Aprendendo Portugol") aparece:
//+-------=======------+
//Aprendendo Portugol
//+-------=======------+
// Autor : Oscar Luis Yopan
// Data : 07/02/2022
var
C : Caractere
Procedimento Ola ()
inicio
Se (C = "Fazendo oq?") Ou (C = "Fazendo o que?") Ou (C = "Fazendo?") Entao
   EscrevaL ("*****************************")
   EscrevaL ("     Estudando Algoritmo!    ")
   EscrevaL ("*****************************")
senao
   EscrevaL ("---------------------")
   EscrevaL ("        O que?       ")
   EscrevaL ("---------------------")
FimSe
FimProcedimento

inicio
EscrevaL ("--------------------")
EscrevaL ("  Pergute Oq Faço!  ")
EscrevaL ("--------------------")
Escreva ("E ae ?: ")
Leia (C)
Ola ()
EscrevaL ("-------------------")
fimalgoritmo
