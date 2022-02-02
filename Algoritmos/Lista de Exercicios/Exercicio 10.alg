algoritmo "E-10"
// Função : Faça um algoritmo que leia a largura e altura de uma parede, calcule e
//mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
//sabendo que cada litro de tinta pinta uma área de 2metros quadrados.
// Autor : Oscar Luis Yopan
// Data : 14/09/2021
// Seção de Declarações 
var
L, H, A, T: real
inicio
escreva ("Informe a  Largura: ")
leia (L)
escreva ("Informe a Altura: ")
leia  (H)
A <- (L*H)
T <- (A/2)
Escreva ("A area  a ser pintada é: ", A, "m^2, e serão nesceesrios: ", T, " litros de tinta.")
fimalgoritmo
