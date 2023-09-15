let btn = document.getElementById("botao");
btn.addEventListener("click", equacao);

function equacao() {
    let duracaoTmpMin = Number(document.getElementById("campoDuracao").value);

    let horas = duracaoTmpMin/60
    let duracaoTmpHr = Math.trunc(horas)

    let mins = (horas - duracaoTmpHr) * 60

    let exibicao = document.getElementById("exibicao");
    exibicao.innerHTML = "<p> Tempo de duração: " + duracaoTmpHr + " hora(s) e " + mins.toFixed(0) + " minutos.</p>"
}