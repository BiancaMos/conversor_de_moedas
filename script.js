const conversor = document.querySelector('button')

conversor.onclick = () => {
var dolarReal = Number(document.querySelector('input').value.replace('.',','))
  if (dolarReal < 1) {
      document.querySelector('span').innerHTML = "Valor inválido!"
  } else {
      document.querySelector('span').innerHTML = (dolarReal * 5.52).toFixed(2) + ' Reais'
  }  
}


// 👀 🤖
//var valorEmDolarTexto = prompt("Qual o valor em dólar que você quer converter?")

//var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

//var valorEmReal = valorEmDolarNumero * 5.52
//var valorEmRealFixado = valorEmReal.toFixed(2)

//alert(valorEmRealFixado)

//minhas anotações pessoais no código que ninguém vê. ;) 
//saoOsComentarios

//Revisão
//variáveis var int - float - string 
//alert - parseInt - parseFloat - prompt (lembra um alert mas conseguimos receber uma informação dentro) 
//Operações + somar * multiplicar 
//Comentário final 



//var userName = "Bianca"
//var userAge = "30"

//var idadeUsuario = prompt("Quantos Anos Você Têm?")
//var idadeUsuarioComoNumero = parseInt(idadeUsuario)

//idadeUsuarioComoNumero = idadeUsuarioComoNumero + 1 

//alert(idadeUsuarioComoNumero)

//var nomeDoJogo = "Fall Guys"
//document.write("Jogo da Bibi " + nomeDoJogo)