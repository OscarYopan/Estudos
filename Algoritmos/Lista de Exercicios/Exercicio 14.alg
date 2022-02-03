algoritmo "E-14"
// Função : A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
//um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
//quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
//sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.
// Autor : Oscar Luis Yopan
// Data : 14/09/2021
// Seção de Declarações 
var
KM, D, D2, K2, T: real
inicio
Escreva ("Informe Quilometros rodados: ")
Leia (KM)
Escreva ("Informe Dias com o carro: ")
Leia (D)
D2 <- D*90
K2 <- KM*0.20
T <- D2+K2
Escreva ("Total a pagar: R$",T)
// Seção de Comandos 
fimalgoritmo
