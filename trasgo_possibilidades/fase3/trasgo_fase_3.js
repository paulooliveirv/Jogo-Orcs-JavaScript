function escolha(){
    var escolha1 = prompt( `    1- Não tem como desistir eu estou com fome né?
    2- Espantar o lobo, comer a presa e voltar para a caverna`)
    let tentativas = 0;
    let maxTentativas = 10;
    while (tentativas < maxTentativas) {
        if (escolha1 != "1" && escolha1 != "2") {
        escolha1 = prompt(
      ` 1- Não tem como desistir eu estou com fome né?
         2 - Espantar o lobo, comer a presa e voltar para a caverna`
    );
  }
  tentativas++;
}
    if (escolha1 == 1){
        window.alert('Você foi teimoso, lá vem o sol, você acaba de tomar os primeiros raios solares, seu corpo incha a cada passo que você dá...')
        alert('Está tudo ficando embaçado e você não tem mais controle dos seus movimentos.')
        alert('Você não poderia tomar sol né?????? BUMMMMMMM seu corpo explode,')
        window.location.href = '../../morte-vitoriaglobal/morte.html'
    }
    else if (escolha1 == 2) {
        window.alert('Você soube que a melhor coisa a se fazer era voltar para caverna e esperar o dia seguinte.')
        window.alert('Você passou perto de morrer mas se deus é por nos quem será contra nós?????')
        window.location.href = '../../morte-vitoriaglobal/vitoria.html';
    }
}