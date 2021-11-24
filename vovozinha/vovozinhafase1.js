function escolha () {
    var opcoes = prompt ("1 - Continuar deitada, pois pode ser algum bicho da floresta que apareceu na sua porta. \n2 - Levantar e abrir a porta para ver quem ou o que está lá fora.");
    if (opcoes == 1) {
        return location = "vovozinhafase2.html"
    } else if (opcoes == 2) {
        return location = "vovozinhagameover1.html"
    } else {
    alert ('Opção inválida')
    return escolha ();
    
    }
    }