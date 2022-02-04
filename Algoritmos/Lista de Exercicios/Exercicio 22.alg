algoritmo "E-22"
// Função : Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
//situação em relação ao alistamento militar.
//- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
//alistamento.
//- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
//alistamento.
// Autor : Oscar Luis Yopan
// Data : 21/09/2021
var
   Idade, Nasc, Alist, Reserv: inteiro
inicio
      Escreva ("Digite que ano nasceu: ")
      Leia (Nasc)
      Idade <- 2021-Nasc
      Alist <- 18-Idade
      Reserv <- Idade-18
      se Idade<18 entao
      escreva ("Falta ", Alist, " Para vc se apresentar ao exercito.")
      fimse
      se Idade>18 entao
      Escreva ("Você se apresentou ao exercito a: ", Reserv, " anos.")
      fimse
      se Idade=18 entao
      Escreva ("Você deve se apresentar este ano  ao serviço Militar.")
      fimse
fimalgoritmo
