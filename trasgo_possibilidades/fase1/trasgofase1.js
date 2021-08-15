function escolha(){
    var escolha1 = prompt( `    1- Ir em direção a luz
    2-Continuar buscando por alimento`)
    let tentativas = 0;
    let maxTentativas = 10;
    while (tentativas < maxTentativas) {
        if (escolha1 != "1" && escolha1 != "2") {
        escolha1 = prompt(
      ` 1- Ir em direção a luz
        2-Continuar buscando por alimento`
    );
  }
  tentativas++;
}
    if (escolha1 == 2){
        window.alert('Parece uma boa escolha....');
        window.location.href = '../fase2/trasgo_fase_2.html';
    }
    else if (escolha1 == 1) {
        window.alert('O que você achou que fosse a luz? Eu quase esqueci.......')
        window.alert('Você não raciocina...')
        window.alert(`Acabou de Encontrar um grupo de humanos, depois de uma briga feroz, você foi amassado na porrada x.x'`)
        window.location.href = '../../morte-vitoriaglobal/morte.html'
    }
}


