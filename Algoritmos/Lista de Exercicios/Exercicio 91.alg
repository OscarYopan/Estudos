algoritmo "Maior_Valor"
// Função : 91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Maior() que vai verificar qual deles é o maior e
//mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
//informando essa característica.
// Autor : Oscar Luis Yopan
// Data : 08/02/2022
var
N1, N2 : Inteiro
Procedimento Maior (Var A, B : Inteiro)
Var
Inicio
Se A > B Entao
   EscrevaL ("O Maior valor é: ", A)
FimSe
Se B > A Entao
   EscrevaL ("O Maior Valor é: ", B)
FimSe
Se A = B Entao
   EscrevaL ("Valores Iguais")
FimSe
FimProcedimento

inicio
EscrevaL ("--------------------------------")
EscrevaL ("      Compare dois Valores      ")
EscrevaL ("--------------------------------")
Escreva ("Numero 1: ")
Leia (N1)
Escreva ("Numero 2: ")
Leia (N2)
EscrevaL ("------------")
Maior (N1, N2)
EscrevaL ("--------------------------------")
fimalgoritmo
