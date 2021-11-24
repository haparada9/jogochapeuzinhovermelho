function escolha () {
    var opcoes = prompt ("1 - Gritar e perguntar quem está batendo na porta. \n2 - Pegar uma faca na cozinha e se esconder dentro do guarda-roupa.");
    if (opcoes == 1) {
        return location = "vovozinhagameover2.html"
    } else if (opcoes == 2) {
        return location = "vovozinhafase3.html"
    } else {
    alert ('Opção inválida')
    return escolha ();
    
    }
    }