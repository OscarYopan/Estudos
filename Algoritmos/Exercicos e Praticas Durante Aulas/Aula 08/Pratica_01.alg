algoritmo "Pratica01"
// Função : Verificar s eum aluno está: Aprovado, reprovado ou em recuperação.
// Autor : Oscar Luis Yopan
// Data : 04/01/2022
// Seção de Declarações 
var
nota1, nota2, media : real
inicio
Escreva ("Digite sua preimeira nota: ")
Leia (nota1)
Escreva ("Digita sua segunda nota: ")
leia (nota2)
media <- ((nota1 + nota2) / 2)
se media >= 7 entao
   escrevaL ("Sua media foi: ", media:2:2, ", Voce foi aprovado!")
   senao
        se (media <7) e (media >= 4) entao
         escrevaL ("Sua media foi: ", media:2:2, ", Você está de recuperação")
         senao
               escrevaL ("Sua media foi: ", media:2:2, ", Voce foi reprovado")
        fimse
fimse

fimalgoritmo
