algoritmo "Contagem_Escolha"
// Função : Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
//qualquer e mostre uma contagem até esse valor:
//Ex: Digite um valor: 35
//Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!
// Autor : Oscar Luis Yopan
// Data : 27/01/2022
// Seção de Declarações 
var
C, N : inteiro
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                              Contagem                              ")
EscrevaL ("--------------------------------------------------------------------")
Escreva ("Numero Final: ")
Leia (N)
C <- 0
Enquanto (C < N) faca
      C <- (C + 1)
      EscrevaL (C)
FimEnquanto
EscrevaL ("-----------------------")
EscrevaL ("Acabou!")
EscrevaL ("--------------------------------------------------------------------")
FimAlgoritmo
