algoritmo "Media_Notas"
// Função : 96) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
//um aluno e retornar a sua média para o programa principal.
// Autor : Oscar Luis Yopan
// Data : 08/02/2022
var
X, Y : Inteiro
NM : Real
Funcao Media (A, B : Inteiro) : Real
Var
M : Real
Inicio
M <- ((A + B) / 2)
Retorne (M)
FimFuncao

inicio
EscrevaL ("--------------------------------")
EscrevaL ("         Media de Notas         ")
EscrevaL ("--------------------------------")
Escreva ("Nota 1: ")
Leia (X)
Escreva ("Nota 2: ")
Leia (Y)
NM <- Media (X, Y)
EscrevaL ("Media: ", NM)
EscrevaL ("-------------------------------")
fimalgoritmo
