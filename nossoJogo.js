/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


   console.log(`Boas vindas ao jogo de BlackJack!`)

   const inicioJogo = confirm (`Quer iniciar uma nova rodada?`)

   if(inicioJogo === true){
   let cartaUser1 = comprarCarta()
   let cartaUser2 = comprarCarta()  

   let cartaComputador1 = comprarCarta()
   let cartaComputador2 = comprarCarta()

   let pontuacaoFinalUser = cartaUser1.valor + cartaUser2.valor
   let pontuacaoFinalComputador = cartaComputador1.valor + cartaComputador2.valor

   console.log(`As suas cartas são: {${cartaUser1.texto} e ${cartaUser2.texto}. Você fez ${pontuacaoFinalUser} pontos!`)
   console.log(`As cartas do Computador são: ${cartaComputador1.texto} e ${cartaComputador2.texto}. Ele fez ${pontuacaoFinalComputador} pontos!`)

   if(pontuacaoFinalUser > pontuacaoFinalComputador){
      console.log(`O usuário ganhou a partida!`)
   }else if(pontuacaoFinalComputador > pontuacaoFinalUser){
      console.log(`O Computador ganhou a partida!`)
   }else if(pontuacaoFinalUser === pontuacaoFinalComputador){
      console.log(`Houve um empate!`)
   }
    
   }else{
      console.log(`O jogo acabou`)
   }  