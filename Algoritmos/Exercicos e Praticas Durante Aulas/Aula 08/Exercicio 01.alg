algoritmo "Aproveitamento"
// Função : Calcule a media de um aluno e indique o aproveitamente dele de A a F.
// Autor : Oscar Luis Yopan
// Data : 04/01/2022
// Seção de Declarações
var
nome : caractere
n1, n2, n3, media : real
inicio
EscrevaL ("----------------------------")
EscrevaL ("   Nota de Aproveitamento   ")
EscrevaL ("----------------------------")
Escreva ("Nome do aluno: ")
leia (nome)
Escreva ("Primeira Nota: ")
leia (n1)
Escreva ("Segudna Nota: ")
leia (n2)
Escreva ("Terceira nota: ")
leia (n3)
media <- ((n1 + n2 + n3) / 3)
se (media <=10) e (media >=9) entao
   escreva ("Voce é um aluno nota: A ")
senao
   se (media < 9) e (media >= 8) entao
      escreva ("Voce é um aluno nota: B ")
   senao
      se (media < 8) e (media >=7) entao
         escreva ("Voce é um aluno nota: C ")
      senao
         se (media < 7) e (media >= 6) entao
            escreva ("Voce é um aluno nota: D ")
         senao
            se (media < 6) e (media >=5) entao
               escreva ("Voce é um aluno nota: E ")
            senao
               se (media < 5) entao
                  escreva ("Voce é um aluno nota: F ")
               fimse
            fimse
         fimse
      fimse
   fimse
fimse

// Seção de Comandos
fimalgoritmo
