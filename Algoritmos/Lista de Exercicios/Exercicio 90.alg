algoritmo "Soma_Procedimento"
// Função : 90) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Somador() que vai calcular e mostrar a soma entre
//eles.
// Autor : Oscar Luis Yopan
// Data : 08/02/2022
var
X, Y : Inteiro
Procedimento Soma (Var A, B : Inteiro)
Var
S : Inteiro
Inicio
S <- A + B
EscrevaL ("Resultado: ", S)
FimProcedimento

inicio
EscrevaL ("-----------------------------")
EscrevaL ("      Some dois Numeros      ")
EscrevaL ("-----------------------------")
Escreva ("Numero 1: ")
Leia (X)
Escreva ("Numero 2: ")
Leia (Y)
Soma (X, Y)
EscrevaL ("-----------------------------")
fimalgoritmo
