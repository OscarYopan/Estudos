algoritmo "Area_terreno"
// Função :
//28) Faça um programa que leia a largura e o comprimento de um terreno
//retangular, calculando e mostrando a sua área em m². O programa também
//deve mostrar a classificação desse terreno, de acordo com a lista abaixo:
//     - Abaixo de 100m² = TERRENO POPULAR
//     - Entre 100m² e 500m² = TERRENO MASTER
//     - Acima de 500m² = TERRENO VIP
// Autor : Oscar Luis Yopan
// Data : 20/01/2022
// Seção de Declarações
var
L, C, A : real
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("            Calcule a area do terreno e Classificaçã                ")
Escreval ("--------------------------------------------------------------------")
Escreva ("Qual a Largura?: ")
Leia (L)
Escreva ("Qual o comprimento?: ")
Leia (C)
A <- (L * C)
EscrevaL ("--------")
se (A <= 100) entao
   EscrevaL (A, "m2 - Terreno Popular.")
senao
   se (A > 100) e (A <= 500) entao
      escreval (A, "m2 - Terreno Master")
   senao
      se (A > 500) entao
         escreval (A, "m2 - Terreno VIP")
      fimse
   fimse
fimse
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
