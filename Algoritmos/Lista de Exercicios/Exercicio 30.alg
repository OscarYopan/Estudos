algoritmo "Tipo_Triangulo"
// Função :
//30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
//de triângulo será formado:
//   - EQUILÁTERO: todos os lados iguais
//   - ISÓSCELES: dois lados iguais
//   - ESCALENO: todos os lados diferentes
// Autor : Oscar Luis Yopan
// Data : 20/01/2022
// Seção de Declarações
var
r1, r2, r3 : real
inicio
escreval ("------------------------------------------------------------------------")
escreval ("             Calcule se as retas podem formar um triangulo              ")
escreval ("------------------------------------------------------------------------")
escreva ("Reta 1: ")
leia (r1)
escreva ("Reta 2: ")
leia (r2)
escreva ("Reta 3: ")
leia (r3)
se ((r1 + r2) > r3) e ((r1 + r3) > r2) e ((r2 + r3) > r1) entao
   escreval ("Os seguimentos de reta informados, são capazes de formar um triangulo")
senao
   escreval ("Os seguimentos de reta informados, não são capazes de formar um triangulo")
fimse
escreval ("-------------------------------------")
Se (r1 = r2) e (r2 = r3) entao
   EscrevaL ("É um triangulo Equilátero.")
senao
   se (r1 = r2) ou (r2 = r3) ou (r3 = r1) entao
      EscrevaL ("É um triagulo Isóceles.")
   senao
      se (r1 <> r2) e (r2 <> r3) e (r3 <> r1) entao
         EscrevaL ("É um triangulo Escaleno")
      fimse
   fimse
fimse
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
