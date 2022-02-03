algoritmo "E-18"
// Função : Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
//dela e depois mostre se ela pode ou não votar.
// Autor : Oscar Luis Yopan
// Data : 15/09/2021
var
Nasc, Idade: inteiro
VotS, VotN: Caractere
inicio
Escreva ("Qual ano de seu nascimemnto? ")
Leia (Nasc)
Idade <- (2021-Nasc)
VotS <- ("Pode Voltar")
VotN <- ("Ainda não pode votar")
se (Idade >= 16) entao
escreva (VotS)
fimse
se (idade < 15) entao
escreva (VotN)
fimse
fimalgoritmo
