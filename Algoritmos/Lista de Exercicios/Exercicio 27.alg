algoritmo "Media_Notas"
// Função :
//27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
//mostrando uma mensagem no final, de acordo com a média atingida:
//- Média até 4.9: REPROVADO
//- Média entre 5.0 e 6.9: RECUPERAÇÃO
//- Média 7.0 ou superior: APROVADO
// Autor : Oscar Luis Yopan
// Data : 20/01/2022
// Seção de Declarações
var
n1, n2, m : real
inicio
Escreval ("--------------------------------------------------------------------")
Escreval ("                    Calculo da Medias das notas                     ")
Escreval ("--------------------------------------------------------------------")
Escreva ("Primeira Nota: ")
leia (n1)
Escreva ("Segunda Nota: ")
leia (n2)
Escreval ("------")
m <- ((n1 + n2) / 2)
se (m < 5) entao
   escreval ("Reprovado")
senao
   se (m >= 5) e (m < 7) entao
      escreval ("Recuperação")
   senao
      se (m >= 7) entao
         escreval ("Aprovado")
      fimse
   fimse
fimse
Escreval ("--------------------------------------------------------------------")
fimalgoritmo
