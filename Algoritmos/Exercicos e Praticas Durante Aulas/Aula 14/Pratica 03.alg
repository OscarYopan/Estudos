algoritmo "Nomes_COm_C"
// Função : Crie um programa, que identifique varios nomes, mas que destaque apenas
// as pessoas qie tem nome começando com a Letra C.
// Autor :
// Data : 10/02/2022
var
Nome : Caractere
NC : Vetor [1..5] De Caractere
C, T : Inteiro
inicio
EscrevaL ("---------------------")
EscrevaL ("     Nomes Com C     ")
EscrevaL ("---------------------")
T <- 0
Para C <- 1 Ate 5 Faca
   Escreva ("Nome ", C, ": ")
   Leia (Nome)
   Se (Copia(Maiusc(Nome), 1, 1) = "C") Entao
      T <- T + 1
      NC[T] <- Nome
   FimSe
FimPara
LimpaTela
EscrevaL ("Lista Nomes COm C:")
Para C <- 1 Ate T Faca
     EscrevaL (Nc[C])
FimPara
EscrevaL ("---------------------")
fimalgoritmo
