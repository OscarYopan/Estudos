algoritmo "E-16"
// Função : [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
//fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
//já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
//quantos dias de vida um fumante perderá e exiba o total em dias.
// Autor : Oscar Luis Yopan
// Data : 14/09/2021
// Seção de Declarações 
var
TV, QC, AF: real
inicio
Escreva ("Quantos Cigarros em media fuma por dia? ")
Leia (QC)
Escreva ("Fuma a quantos anos? ")
Leia (AF)
TV <- (((((QC*10)*365)*AF)/60)/24)
Escreva ("Você já perdeu ", TV, " dias de vida, fumando")
fimalgoritmo
