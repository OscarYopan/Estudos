algoritmo "Maior_Valor"
// Função :Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
//na tela uma das mensagens abaixo:
//- O primeiro valor é o maior
//- O segundo valor é o maior
//- Não existe valor maior, os dois são iguais
// Autor :
// Data : 20/01/2022
// Seção de Declarações
var
n1, n2 : inteiro
inicio
Escreval ("--------------------------------------------------------------------")
Escreval ("                   Qual tem maior valor?                            ")
Escreval ("--------------------------------------------------------------------")
Escreval ("Informe primeiro Numero: ")
leia (n1)
Escreval ("Informe segundo Numero: ")
leia (n2)
Escreval ("----")
se (n1 > n2) entao
   escreval (n1, " é o maior valor")
   senao
        se (n1 < n2) entao
        escreval (n2, " é o maior valor")
        senao
             se (n1 = n2) entao
             escreval (n1, " e ", n2, " Ambos possuem igual valor")
             fimse
        fimse
fimse
Escreval ("--------------------------------------------------------------------")
fimalgoritmo
