algoritmo "Tringulo"
// Função :[DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
//Analise seus comprimentos e diga se é possível formar um triângulo com essas
//retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
//de cada lado deve ser menor que a soma dos outros dois.
// Autor : Oscar Luis Yopan
// Data : 20/01/2022
// Seção de Declarações
var
r1, r2, r3 : real
inicio
escreval ("------------------------------------------------------------------------")
escreval ("Calcule se as retas podem formar um triangulo")
escreval ("------------------------------------------------------------------------")
escreval ("Reta 1: ")
leia (r1)
escreval ("Reta 2: ")
leia (r2)
escreval ("Reta 3: ")
leia (r3)
se ((r1 + r2) > r3) e ((r1 + r3) > r2) e ((r2 + r3) > r1) entao
   escreval ("Os seguimentos de reta informados, são capazes de formar um triangulo")
senao
   escreval ("Os seguimentos de reta informados, não são capazes de formar um triangulo")
fimse
escreval ("-----------------------------------------------------------------------")
fimalgoritmo
