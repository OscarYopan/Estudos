algoritmo "Aula 07-01"
// Função : Digitar o ano que nasceu e então calcule a idade da pessoa.
// e entao calcule se a pessoa já possui idade para ser presa;
// Autor : Oscar Luis Yopan
// Data : 03/01/2022
// Seção de Declarações
var
Ano, Nasc, Idade : inteiro
inicio
Escreva ("Em que ano estamos?")
leia (Ano)
Escreva ("Em que ano vc Nasceu?")
leia (Nasc)
Idade <- (Ano - Nasc)
Se (Idade >= 18) entao
   escreva ("Voce tem: ", Idade, " anos. Portanto pode ser preso")
senao
   escreva ("Voce tem: ", Idade, " anos. Portanto não pode ser preso")
fimse
fimalgoritmo
