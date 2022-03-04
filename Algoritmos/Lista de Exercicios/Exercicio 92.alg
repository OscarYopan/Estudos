algoritmo "Par_Impar_Procedimento"
// Função : 92) Crie uma lógica que leia um número inteiro e passe para um procedimento
//ParOuImpar() que vai verificar e mostrar na tela se o valor passado como
//parâmetro é PAR ou ÍMPAR.
// Autor : Oscar Luis Yopan
// Data : 08/02/2022
var
N : Inteiro
Procedimento Par(Var A : Inteiro)
Var
Inicio
Se (N % 2 = 0) Entao
   EscrevaL ("O Numero: ", N, " é, PAR.")
Senao
   EscrevaL ("O Numero: ", N, " é IMPAR")
FimSe
FimProcedimento

inicio
EscrevaL ("-------------------------")
EscrevaL ("      Par ou Impar?      ")
EscrevaL ("-------------------------")
Escreva ("Numero: ")
Leia (N)
EscrevaL ("----------")
Par (N)
EscrevaL ("-------------------------")
fimalgoritmo
