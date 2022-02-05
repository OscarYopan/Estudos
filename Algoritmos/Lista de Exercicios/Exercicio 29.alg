algoritmo "Reajuste_Salarial"
// Função :
//29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
//quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
//acordo com a tabela a seguir:
//       - Até 3 anos de empresa: aumento de 3%
//       - entre 3 e 10 anos: aumento de 12.5%
//       - 10 anos ou mais: aumento de 20%
// Autor : Oscar Luis Yopan
// Data : 20/01/2022
// Seção de Declarações
var
N : caractere
T : inteiro
S, A : real
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                         Reajuste Salarial                          ")
EscrevaL ("--------------------------------------------------------------------")
Escreva ("Nome do Funcionário: ")
Leia (N)
Escreva ("Salário Atual: ")
Leia (S)
Escreva ("Quantos anos de empresa: ")
Leia (T)
EscrevaL ("----------------------------------")
Escolha (T)
caso 1, 2
   A <- (S+(3*(S/100)))
caso 3, 4, 5, 6, 7, 8, 9
   A <- (S+(12.5*(S/100)))
Outrocaso
   A <- (S+(20*(S/100)))
FimEscolha
EscrevaL (N, ", Seu Sálario foi reajustado para: R$ ", A:6:2)
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
