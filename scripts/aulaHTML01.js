let btnHeader = document.getElementById("header");
btnHeader.addEventListener("mouseover", mudarHeader);
btnHeader.addEventListener("mouseout", voltar);

function mudarHeader () {
    btnHeader.innerHTML = "Seja bem-vindo!";
}

function voltar() {
    btnHeader.innerHTML = "Bom dia!"
}

let botao = document.getElementById("botao");
botao.addEventListener("click", Clique);

function Clique() {
    let mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "<p>Isso aqui é uma mensagem secreta!</p>"
}