function escolha(){
    var escolha1 = prompt('1 ou 2?')
    if (escolha1 == 1 || escolha1 == 2){
        window.alert('Vamos para a próxima fase');
        window.location.href = '../fase3/trasgo_fase3.1.html';
    }
    else if (escolha1 == 2) {
        window.alert('Vamos para a próxima fase');
        window.location.href = '../fase3/trasgo_fase3.2.html';
    }else{
        window.alert('Erro de digitação, tente novamente.')
    }
}