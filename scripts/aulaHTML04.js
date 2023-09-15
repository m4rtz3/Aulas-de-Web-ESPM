let botao = document.getElementById("botao");
botao.addEventListener("click", apresentacao);

function apresentacao () {
    let preco = document.getElementById("campoPreco").value;

    let entrada = 1/2 * preco;
    let saldo = entrada/12;

    let nome = (document.getElementById("campoModelo").value).toUpperCase();

    let exibicao = document.getElementById("exibicao");
    exibicao.innerHTML = nome + "<p>Preço da entrada: R$" + preco + "</p>" + "<p>Saldo: R$" + saldo + " em 12 vezes</p>";
}