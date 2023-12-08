const frm = document.querySelector("form");
const tabela = document.getElementById("tabela");
const bodyTbl = document.getElementById("bodyTbl");

tabela.className = "oculta"

let ttlFilme = "";
let gnrFilme = "";

let nomeFilmes = []
let gnrFilmes = []
let removerLista = []

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //pegar dados
    ttlFilme = frm.nomeFilmeCampo.value;
    gnrFilme = frm.gnrFilmeCampo.value;

    nomeFilmes.push(ttlFilme)
    gnrFilmes.push(gnrFilme)

    nomeFilmeCampo.value = "";
    gnrFilmeCampo.value = "";

    for (let i = 0; i < nomeFilmes.length; i++) {
        removerLista.push("X")
    }

    //colocar na tabela + mostrar tabela
    tabela.className = "exibe"

    Tabela();
});

function Remover(i) {
    let index = i;

    nomeFilmes.splice(index, 1)
    gnrFilmes.splice(index, 1)
    removerLista.splice(index, 1)

    Tabela();

    if (nomeFilmes.length == 0) {
        tabela.className = "oculta"
    }
}

function Tabela() {
    let tbl = document.getElementById("bodyTbl");

    let tableRow = "";

    for (let i = 0; i < nomeFilmes.length; i++) {
        tableRow += `
            <tr>
                <td class="campoNm">
                    ${nomeFilmes[i]}
                </td>
                
                <td class="campoGnr">
                    ${gnrFilmes[i]}
                </td>
                
                <td id="${i}" onclick="Remover(${i})" class="X">
                    ${removerLista[i]}
                </td>
            </tr>
        `;
    }

    tbl.innerHTML = tableRow;
}