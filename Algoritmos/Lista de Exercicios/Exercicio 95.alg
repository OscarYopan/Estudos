algoritmo "Soma_Funcao"
// Função : 95) Refaça o exercício 90, só que agora em forma de função Somador(), que vai
//receber dois parâmetros e vai retornar o resultado da soma entre eles para o
//programa principal.
// Autor : Oscar Luis Yopan
// Data : 08/02/2022
var
X, Y, S : Inteiro
Funcao Soma (A, B : Inteiro): Inteiro
Var
Inicio
      Retorne A + B
FimFuncao

inicio
EscrevaL ("-----------------------------")
EscrevaL ("      Some dois Numeros      ")
EscrevaL ("-----------------------------")
Escreva ("Numero 1: ")
Leia (X)
Escreva ("Numero 2: ")
Leia (Y)
S <- Soma (X, Y)
EscrevaL ("----------")
EscrevaL ("Resultado: ", S)
EscrevaL ("-----------------------------")
fimalgoritmo
