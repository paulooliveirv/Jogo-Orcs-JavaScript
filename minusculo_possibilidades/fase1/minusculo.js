function escolha(){
    var escolha1 = prompt( `    1- Entrar na casa
    2-Procurar mais coisas`)
    let tentativas = 0;
    let maxTentativas = 10;
    while (tentativas < maxTentativas) {
        if (escolha1 != "1" && escolha1 != "2") {
        escolha1 = prompt(
      ` 1- Entrar na casa
        2- Procurar mais coisas`
    );
  }
  tentativas++;
}
    if (escolha1 == 2){
        window.alert('Parece uma boa escolha....');
        window.location.href = '../fase2/minusculo_fase_2.html';
    }
    else if (escolha1 == 1) {
        window.alert('Entrou na casa né?.......')
        window.alert('Você acaba de encontrar um cachorro e por sorte consegue fugir...')
        window.location.href = '../fase2/minusculo_fase_2.html'
    }
}

