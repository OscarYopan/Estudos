algoritmo "Detector de Pesado"
// Função : Detectar Nome e pesso da Pessoa Mais pesada
// Autor : Oscar Luis Yopan
// Data : 05/02/2022
var
I : Inteiro
N, Pesado : Caractere
P, Mai : Real
Procedimento Topo ()
Inicio
LimpaTela
EscrevaL ("=============================")
EscrevaL ("     Detector de Pesado      ")
EscrevaL ("Maior Peso: ", Mai, "Kg")
EscrevaL ("=============================")
FimProcedimento
inicio
Topo ()
Para I <- 1 Ate 5 Faca
   Escreva ("Nome: ")
   leia (N)
   Escreva ("Peso: ", N, ": ")
   Leia (P)
   Se (P > Mai) Entao
      Mai <- P
      Pesado <- N
   FimSe
   Topo ()
FimPara
Topo ()
EscrevaL ("Pessoa Mais Pesada: ", Pesado, " com: ", Mai, "Kg.")
fimalgoritmo
