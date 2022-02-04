algoritmo "IMC"
// Função : Descubra o peso, a Altura, entao calcule o IMC e informe se a pessoa
// estah acima a maixa ou na massa corporea ideal
// Autor : Oscar Luis Yopan
// Data : 03/01/2022
// Seção de Declarações
var
peso, alt, IMC : real
inicio
      escreva ("Qual o seu Peso?")
      leia (peso)
      escreva ("Qual a sua altura?")
      leia (alt)
      IMC <- (peso/(alt ^ 2))
      se (IMC >- 18.5) e (IMC <=25) entao
         escreva ("Seu IMC é: ", IMC:5:2, " Você está saldavel!")
      senao
           escreva ("Seu IMC é: ", IMC:5:2, " você precisa consultar um especialista.")
      fimse
fimalgoritmo
