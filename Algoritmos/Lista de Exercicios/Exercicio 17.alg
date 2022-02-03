algoritmo "E-17"
// Função :Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
//80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
//o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
// Autor : Oscar Luis Yopan
// Data : 15/09/2021
var
VC, kMH, Multa, Valor, Vel: real
inicio
Escreva ("Qual a velcidade aferida pelo radar? ")
Leia (Vel)
kMH <- 80 //KMH
Multa <- 5 // R$ p/ km
Valor <- ((Vel-kMH)*Multa))
se (Vel > KMH) entao
Escreva ("Você foi multado por excesso de velocidade, no valor de: R$", Valor)
fimse
se (Vel <= KMH)  entao
escreva ("Você é um bom(a) cumpridor(a) da lei!")
fimse
fimalgoritmo
