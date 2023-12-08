const frm = document.querySelector("form");
let numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let digito = 0

let senha = 0;

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorBotao = document.activeElement.value;
    const campoSenha = document.getElementById("senhaDgt");

    if (valorBotao === "Validar") {
        Validacao();
    }

    if (numeros.includes(valorBotao)) {
        digito = valorBotao;
        Digitacao(digito, campoSenha);
    }

    function Validacao() {
        const mensagem = document.querySelector(".oculta");
        let campoSenhaOfc = document.getElementById("senhaDgt").value;
    
        if (parseInt(campoSenhaOfc) === 1234) {
            mensagem.innerHTML = "<p>SUCESSO</p>";
        } else {
            mensagem.innerHTML = "<p>ERRO</p>";
        }
    }

    function Digitacao(digito, campoSenha) {
        campoSenha.value += digito;
    }
});