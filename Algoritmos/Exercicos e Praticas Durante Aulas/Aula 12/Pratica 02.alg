algoritmo "Par_O_Impar?"
// Função : Programa para verificar se um numero é par ou impar
// Autor : Oscar Luis Yopan
// Data : 05/02/2022
// Seção de Declarações
var
N : inteiro
Procedimento ParOuImpar (V : Inteiro)
Inicio
Se (V%2=0) Entao
   EscrevaL ("O Numero: ", V, " é, PAR.")
Senao
   EscrevaL ("O numero: ", V, " é IMPAR")
FimSe
FimProcedimento
inicio
Escreva ("Numero: ")
Leia (N)
ParOuImpar (N)
fimalgoritmo
