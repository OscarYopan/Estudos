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
se (IMC >- 18.5) e (IMC <25) entao
   escreva ("Seu IMC é: ", IMC:5:2, " Peso Ideal!")
senao
   se (IMC < 17) entao
      escreva ("Seu IMC é: ", IMC:5:2, " Muito abaixo do peso.")
   senao
      se (IMC >= 17) e (IMC < 18.5) entao
         escrevaL ("Seu IMC é: ", IMC:5:2, " Abaixo do peso.")
      senao
         se (IMC >= 25) e (IMC < 30) entao
            EscrevaL ("Seu IMC é: ", IMC:5:2, " Sobrepeso.")
         senao
            se (IMC >= 30) e (IMC < 35) entao
               EscrevaL ("Seu IMC é: ", IMC:5:2, " Obesidade.")
            senao
               se (IMC >= 35) e (IMC < 40) entao
                  EscrevaL ("Seu IMC é: ", IMC:5:2, " Obesidade Severa.")
               senao
                  se (IMC <= 40) entao
                     EscrevaL ("Seu IMC é: ", IMC:5:2, " Obesidade Mormida.")
                  fimse
               fimse
            fimse
         fimse
      fimse
   fimse
fimse
fimalgoritmo
