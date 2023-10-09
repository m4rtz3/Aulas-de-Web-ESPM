function Molde() {
    let comToalha = parseInt(document.getElementById("comToalha").value);
    let larToalha = parseInt(document.getElementById("larToalha").value);
    let carToalha = document.getElementById("carToalha").value;

    let moldeTmn = 5;

    let linhas = Math.trunc(larToalha / moldeTmn);
    let colunas = Math.trunc(comToalha / moldeTmn);

    let toalha = new Array(linhas);

    for (let i = 0; i < toalha.length; i++) {
        toalha[i] = new Array(colunas);

        for (let j = 0; j < colunas; j++) {
            if (i % 2 == 0) {
                if (j % 2 != 0) {
                    toalha[i][j] = carToalha;
                } else {
                    toalha[i][j] = " ";
                }
            } else {
                if (j % 2 == 0) {
                    toalha[i][j] = carToalha;
                } else {
                    toalha[i][j] = " ";
                }
            }
        }
    }

    let tableHTML = "<table border=5px>";

    for (let i = 0; i < toalha.length; i++) {
        tableHTML += '<tr>';

        for (let j = 0; j < toalha[i].length; j++) {
            tableHTML += '<td>' + toalha[i][j] + '</td>';
        }

        tableHTML += '</tr>';
    }

    tableHTML += '</table>';

    let molde = document.getElementById("molde");
    molde.innerHTML = tableHTML;

}

function imprimir() {
    window.print();
}