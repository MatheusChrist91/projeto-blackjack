function jogarBlackJack () {
   let novaRodada = confirm(`Boas vindas ao jogo BlackJack!
   Quer iniciar uma nova rodada?`)

   let maoUser = []
   let maoComputador = []

   if (novaRodada){
      let continuaJogo = true

      while(continuaJogo){
         maoUser.push(comprarCarta())
         maoUser.push(comprarCarta())
         maoComputador.push(comprarCarta())
         maoComputador.push(comprarCarta())

         if((maoUser[0].valor === 11 && maoUser[1].valor === 11) || (maoComputador[0].valor ===1 && maoComputador[1].valor === 11)) {
         maoUser = []
         maoComputador = []
      }else{
         continuaJogo = false
      }
   }
}
   textoMaoUser = ' '
   pontuacaoUser = 0

   textoMaoComputador = ' '
   pontuacaoComputador = 0

   for (let i = 0; i < maoUser.length; i++) {
      textoMaoUser += maoUser[i].texto + " "
      pontuacaoUser += maoUser[i].valor
    }

    for (let i = 0; i < maoComputador.length; i++) {
      textoMaoComputador += maoComputador[i].texto + " "
      pontuacaoComputador += maoComputador[i].valor
    }




    let segueJogo = true
    while(segueJogo){
      if(pontuacaoUser > 21){
         break
      }
      let perguntaCarta = confirm(`Suas cartas são ${textoMaoUser}, - total: ${pontuacaoUser}!
      A carta revelada do computador é ${maoComputador[0].texto}. Deseja comprar mais uma carta?`)
    

    if(perguntaCarta){
      let carta = comprarCarta()
      maoUser.push(carta)
      textoMaoUser +=` ${carta.texto}`
      pontuacaoUser += carta.valor
    }else{
      segueJogo = false
    }
   }

   while(pontuacaoComputador <= pontuacaoUser && pontuacaoUser <= 21){
      let carta = comprarCarta()
      maoComputador.push(carta)
      textoMaoComputador += ` ${carta.texto}`
      pontuacaoComputador += carta.valor
   }

   if (pontuacaoUser > 21 && pontuacaoComputador <= 21) {
      alert(`Cartas do usuário: ${textoMaoUser} - Pontuação: ${pontuacaoUser}\n
       Cartas do computador: ${textoMaoComputador} - Pontuação: ${pontuacaoComputador}
       O Jogador estourou a pontuação, o COMPUTADOR VENCEU!`)
   } else if (pontuacaoComputador > 21 && pontuacaoUser <= 21) {
      alert(`Cartas do usuário: ${textoMaoUser} - Pontuação: ${pontuacaoUser}\n
       Cartas do computador: ${textoMaoComputador} - Pontuação: ${pontuacaoComputador}
       O computador estourou a pontuação, O USUÁRIO VENCEU!`)
   } else if (pontuacaoUser > 21 || pontuacaoComputador > 21) {
      alert(`Cartas do usuário: ${textoMaoUser} - Pontuação: ${pontuacaoUser}\n
       Cartas do computador: ${textoMaoComputador} - Pontuação: ${pontuacaoComputador}
       O Usuário e o Computador Estouraram os pontos!`)
   } else if (pontuacaoUser > pontuacaoComputador) {
      alert(`Cartas do usuário: ${textoMaoUser} - Pontuação: ${pontuacaoUser}\n
       Cartas do computador: ${textoMaoComputador} - Pontuação: ${pontuacaoComputador}
       O USUÁRIO VENCEU!`)
   } else if (pontuacaoComputador > pontuacaoUser) {
      alert(`Cartas do usuário: ${textoMaoUser} - Pontuação: ${pontuacaoUser}\n
       Cartas do computador: ${textoMaoComputador} - Pontuação: ${pontuacaoComputador}
       O COMPUTADOR VENCEU!`)
   } else if (pontuacaoUser === pontuacaoComputador) {
      alert(`Cartas do usuário: ${textoMaoUser} - Pontuação: ${pontuacaoUser}\n
       Cartas do computador: ${textoMaoComputador} - Pontuação: ${pontuacaoComputador}
       O Jogo Empatou!`)
   }
}
jogarBlackJack()