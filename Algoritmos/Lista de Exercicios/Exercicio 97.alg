algoritmo "Maior_Valor_Funcao"
// Função : 97) Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma
//adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o
//maior entre eles.
// Autor : Oscar Luis Yopan
// Data : 08/02/2022
var
N1, N2, N3, VM : Inteiro
D : Caractere
Funcao Maior(A, B, C : Inteiro) : Inteiro
Var
MV : Inteiro
Inicio
Se (A > B) e (A > C) Entao
   MV <- A
FimSe
Se (B > A) e (B > C) Entao
   MV <- B
FimSe
Se (C > A) e (C > B) Entao
   MV <- C
FimSe

Se (A = B) e (B = C) Entao
   MV <- A
FimSe
Retorne (MV)
FimFuncao

Inicio
EscrevaL ("--------------------------------")
EscrevaL ("      Compare dois Valores      ")
EscrevaL ("--------------------------------")
Escreva ("Numero 1: ")
Leia (N1)
Escreva ("Numero 2: ")
Leia (N2)
Escreva ("Numero 3: ")
Leia (N3)
D <- ("Valores todos Iguais")
EscrevaL ("------------")
VM <- Maior (N1, N2, N3)
EscrevaL ("O maior Valor é: ", VM)
EscrevaL ("--------------------------------")
FimAlgoritmo
