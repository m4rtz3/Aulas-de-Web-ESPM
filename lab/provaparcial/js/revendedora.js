function Classifique() {
    let modeloNm = String(document.getElementById("modeloNome").value.toUpperCase());
    let anoModelo = parseInt(document.getElementById("fabricacaoAno").value);

    let tempoDeUso = 2023 - anoModelo;
    let tipoVcl = ""

    if (anoModelo == 2023) {
        tipoVcl = 'NOVO';
    } else if (tempoDeUso <= 2) {
        tipoVcl = 'SEMINOVO/USADO';
    }

    let precoModelo = parseInt(document.getElementById("precoVcl").value);

    // cálculo
    let entrada = 0;
    let outraMtd = 0;

    if (tipoVcl == "NOVO") {
        entrada = precoModelo / 2;
        outraMtd = entrada / 10;
    } else {
        entrada = precoModelo * 30 / 100;
        outraMtd = (precoModelo - entrada) / 10;
    }

    localStorage.setItem("modelo", modeloNm);
    localStorage.setItem("tipo", tipoVcl);
    localStorage.setItem("entrada", entrada);
    localStorage.setItem("outraMtd", outraMtd);

    window.location.href = "./02_outrapagina.html";
}