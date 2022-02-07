algoritmo "Contagem_Inteligente_Personalizada"
// Função : 44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
//incremento, mostrando em seguida todos os valores no intervalo:
//Ex: Digite o primeiro Valor: 3
//Digite o último Valor: 10
//Digite o incremento: 2
//Contagem: 3 5 7 9 Acabou!
// Autor : Oscar Luis Yopan
// Data : 27/01/2022
var
NI, NF, I, C : inteiro
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                       Contagem Inteligente                         ")
EscrevaL ("--------------------------------------------------------------------")
Escreva ("Qual o Incio: ")
Leia (NI)
Escreva ("Qual o FIm: ")
Leia (NF)
Escreva ("Qual o Incremento: ")
Leia (I)
EscrevaL ("-----------------------")
Se (NI <= NF)  entao
   C <- NI
   Enquanto (C < NF) faca
      C <- (C + I)
      EscrevaL (C)
   FimEnquanto
senao
   C <- NI
   Enquanto (C > NF) faca
      C <- (C - I)
      EscrevaL (C)
   FimEnquanto
FimSe
EscrevaL ("-----------------------")
EscrevaL ("Acabou!")
EscrevaL ("--------------------------------------------------------------------")
fimalgoritmo
