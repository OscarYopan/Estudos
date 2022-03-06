algoritmo "Super_Somador_Funcao"
// Função : 98) Crie um programa que tenha uma função SuperSomador(), que vai receber dois
//números como parâmetro e depois vai retornar a soma de todos os valores no
//intervalo entre os valores recebidos.
//Ex:
//SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
//SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85
// Autor : Oscar Luis Yopan
// Data : 08/02/2022
var
X, Y, R : Inteiro
Funcao SuperContador (Var A, B : Inteiro): Inteiro
VaR
S, C : Inteiro
Inicio
S <- 0
Para C <- A Ate B Passo 1 Faca
   S <- S + A
   A <- A + 1
FimPara
Retorne S
FimFuncao

inicio
EscrevaL ("-------------------------")
EscrevaL ("      Super Somador      ")
EscrevaL ("-------------------------")
Escreva ("Numero Inicial: ")
Leia (X)
Escreva ("Numero Final: ")
Leia (Y)
R <- Supercontador (X, Y)
EscrevaL ("-----")
EscrevaL ("Soma de Todos os Valores: ", R)
EscrevaL ("-------------------------")
fimalgoritmo
