const formulario = document.querySelector("form");
const mensagem = document.querySelector("pre")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nomeAtleta = String(document.getElementById("inAtleta").value);
    let idadeAtleta = parseInt(document.getElementById("inAtleta").value);

    let categorias = ["Infantil", "Juvenil", "Adulto"]

    let espaco = mensagem;
    let linha = ""

    if (idadeAtleta <= 12) {
        espaco.innerHTML += "<p>" + nomeAtleta + "</p>"
        espaco.innerHTML += "<hr>"
        espaco.innerHTML += "<p> Categoria: " + categorias[0] + "</p>"
    } else if (13 <= idadeAtleta < 18) {
        espaco.innerHTML += "<p>" + nomeAtleta + "</p>"
        espaco.innerHTML += "<hr>"
        espaco.innerHTML += "<p> Categoria: " + categorias[1] + "</p>"
    } else {
        espaco.innerHTML += "<p>" + nomeAtleta + "</p>"
        espaco.innerHTML += "<hr>"
        espaco.innerHTML += "<p> Categoria: " + categorias[2] + "</p>"
    }

    for (let i = 0; i < nomeAtleta.length; i++) {
        if (nome[i] = " ") {
            linha += " "
        } else {
            linha += "-"
        }
    }

    espaco.innerHTML += linha;

});