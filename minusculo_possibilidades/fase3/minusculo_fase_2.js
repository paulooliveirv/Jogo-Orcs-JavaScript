function escolha(){
    var escolha1 = prompt( `    1- Seguir o som do uivo
    2-Continuar Buscando por alimento`)
    let tentativas = 0;
    let maxTentativas = 10;
    while (tentativas < maxTentativas) {
        if (escolha1 != "1" && escolha1 != "2") {
        escolha1 = prompt(
      ` 1- Seguir o som do uivo
        2-Continuar buscando por alimento`
    );
  }
  tentativas++;
}
    if (escolha1 == 1){
        window.location.href = '../fase3/trasgo_fase3.1.html';
    }
    else if (escolha1 == 2) {
        window.alert('Estamos avançando...')
        window.location.href = '../fase3/trasgo_fase3.2.html';
    }
}