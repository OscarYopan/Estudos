algoritmo "E-19"
// Função : Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
//média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
//não um bom aproveitamento (se ficou acima da média 7.0).
// Autor : Oscar Luis Yopan
// Data : 15/09/2021
var
Nome: caractere
nota1, nota2, media: real
inicio
Escreva ("Nome do Aluno: ")
Leia (Nome)
Escreva ("Primeira Nota: ")
Leia (nota1)
Escreva ("Segunda Nota: ")
Leia (Nota2)
media <- ((nota1 + nota2)/2)
se (media  >= 7.0) entao
escreva (Nome, "- Sua Media foi -- ", media, " - Você foi: Aprovado")
fimse
se (media < 7.0) entao
escreva (Nome, "- Sua Media foi -- ", media, " - Você foi: Reprovado")
fimse
fimalgoritmo
