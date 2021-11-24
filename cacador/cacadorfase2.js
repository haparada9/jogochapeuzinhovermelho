function escolha () {
    var opcoes = prompt ("1 - Deixar os dois irem embora, já que não viu nada demais além de estarem conversando sobre comida. \n2 - Seguir os dois, pois achou o Lobo bem suspeito.");
    if (opcoes == 1) {
        return location = "cacadorgameover2.html"
    } else if (opcoes == 2) {
        return location = "cacadorfase3.html"
} else {
    alert ('Opção inválida')
    return escolha ();

}
}
