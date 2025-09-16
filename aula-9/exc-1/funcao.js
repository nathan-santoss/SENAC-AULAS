import promptSync from 'prompt-sync'
const prompt = promptSync()

export const sortear = (max, min) => {
   return Math.floor(Math.random() * (max - min) + min)
}

export const imprimir = (jogadores, sorteado) => {
   let acertou = jogadores.filter(player => player.teste === sorteado)
    console.log(`[==== NÚMERO SORTEADO ${sorteado} ====]`);
    acertou.forEach(player => {
    
        console.log(`
            Nome -> ${player.nome} (acertou)
            Pontuação atual -> ${player.pontos}
            -----------------------------------\n`);
    });
    jogadores.sort((a, b) => b.pontos - a.pontos)
    console.log(`[==== FIM DA RODADA ====]\n`);
}

export const podio = (jogadores, primeiro, segundo, terceiro) => {
   let pontuacao = jogadores.map(player => player.pontos)
   let maior = Math.max(...pontuacao)
   let ultimo = Math.min(...pontuacao)
   jogadores.forEach(player => {
      if(player.pontos === maior){primeiro.push(player)}
      else if(player.pontos !== ultimo){segundo.push(player)}
      else if(player.pontos === ultimo){segundo.push(player)}
      else{terceiro.push(player)}
   });

   if(primeiro.length > 1){
      primeiro.forEach(player => {
         console.log(`1° LUGAR (empate) -> ${player.nome} (${player.pontos} pontos)`);
      });
   }
   else{ console.log(`1° LUGAR (vencedor) -> ${jogadores[0].nome} (${jogadores[0].pontos} pontos)`);}

   if(segundo.length > 1){
      segundo.forEach(player => {
         console.log(`2° LUGAR (empate) -> ${player.nome} (${player.pontos} pontos)`);
      });
   }
   else{ console.log(`2° LUGAR -> ${jogadores[1].nome} (${jogadores[1].pontos} pontos)`);}

   if(segundo.length === 1){
      console.log(`3° LUGAR -> ${jogadores[2].nome} (${jogadores[2].pontos} pontos)`);
   }
}