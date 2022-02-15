algoritmo "Levantamento"
// Função : ler Sexo, Idade e Cor de Cabelo de diversas pessoas
// e ao final, mostrar:
//     = Total de HOMENS com mais de 18 ANOS e cabelos CASTANHOS.
//     = Total de MULHERES entre 25 e 30 ANOS e cabelos LOIROS.
// Autor : Oscar Luis Yopan
// Data : 28/01/2022
// Seção de Declarações
var
S, R : Caractere
I, C, H, M : Inteiro
inicio
EscrevaL ("--------------------------------------------------------------------")
EscrevaL ("                          Levantamento                              ")
EscrevaL ("--------------------------------------------------------------------")
H <- 0
M <- 0
Repita
   Escreva ("Sexo [M/F]: ")
   Leia (S)
   Escreva ("Idade: ")
   Leia (I)
   EscrevaL ("Cor do Cabelo: ")
   EscrevaL (" [1] - Preto")
   EscrevaL (" [2] - Castanho")
   EscrevaL (" [3] - Loiro")
   EscrevaL (" [4] - Ruivo")
   Leia (C)
   Escreva ("Quer Continuar? [S/N]")
   Leia (R)
   Se (S = "M") e (C = 2) e (I >= 18) Entao
      H <- (H + 1)
   senao
      se (S = "F") e (C = 3) e ((I > 25) e (I < 30)) Entao
         M <- (M + 1)
      FimSe
   FimSe
   LimpaTela
Ate (R = "N")
EscrevaL ("----------------------------")
EscrevaL ("Levantamento Final:")
EscrevaL ("Homens, cabelos castanhos e maiores de 18 anos: ", H)
EscrevaL ("Mulheres Louras, entre 25 2 30 anos: ", M)
EscrevaL ("--------------------------------------------------------------------")
Fimalgoritmo
