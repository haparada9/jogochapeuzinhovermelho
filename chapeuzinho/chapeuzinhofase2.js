function escolha () {
    var opcoes = prompt ("1 - Pegar as flores que já foram colhidas e correr para a casa da Vovózinha. \n2 - Continuar colhendo as flores e ir andando até a casa da Vovózinha.");
    if (opcoes == 1) {
        return location = "chapeuzinhofase3.html"
    } else if (opcoes == 2) {
        return location = "chapeuzinhogameover2.html"
    } else {
    alert ('Opção inválida')
    return escolha ();
    
    }
    }