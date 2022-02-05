algoritmo "Reakuste_Salarial"
// Função :37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um
//aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
//o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
//No final, mostre o seu novo salário, baseado na tabela a seguir:
//   - Mulheres
//     - menos de 15 anos de empresa: +5%
//     - de 15 até 20 anos de empresa: +12%
//     - mais de 20 anos de empresa: +23%
//    - Homens
//      - menos de 20 anos de empresa: +3%
//      - de 20 até 30 anos de empresa: +13%
//      - mais de 30 anos de empresa: +25%
// Autor : Oscar Luis Yopan
// Data : 27/01/2022
var
N, M, F : Caractere
S, RS : Real
A, Sexo : Inteiro
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                         Reajuste Salarial                          ")
EscrevaL ("--------------------------------------------------------------------")
Escreva ("Nome do Funcionario(a); ")
Leia (N)
Escreva ("Salario Atual: ")
Leia (S)
EscrevaL ("Sexo: ")
EscrevaL ("[1] - Masculino")
EscrevaL ("[2] - Feminino")
Leia (Sexo)
Escreva ("Anos de Empresa: ")
leia (A)
EscrevaL ("------------------------------")
Escolha Sexo
Caso 2
   Escolha A
   Caso 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
      RS <- (S + (5*(S/100)))
      EscrevaL (N, " Salario Reajustado para; R$ s", RS:6:2)
   Caso 15, 16, 17, 18, 19
      RS <- (S + (12*(S/100)))
      EscrevaL (N, " Salario Reajustado para; R$ ", RS:6:2)
   Outrocaso
      RS <- (S + (23*(S/100)))
      EscrevaL (N, " Salario Reajustado para; R$ ", RS:6:2)
   FimEscolha
Caso 1
   Escolha A
   Caso 1, 2, 3, 4, 5 ,6 , 7, 8, 9, 10, 11, 12, 13, 14
      RS <- (S + (3*(S/100)))
      EscrevaL (N, " Salario Reajustado para; R$ ", RS:6:2)
   Caso 15, 16, 17, 18, 19
      RS <- (S + (13*(S/100)))
      EscrevaL (N, " Salario Reajustado para; R$ ", RS:6:2)
   Outrocaso
      RS <- (S + (25*(S/100)))
      EscrevaL (N, " Salario Reajustado para; R$ ", RS:6:2)
   FimEscolha
FimEscolha
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
