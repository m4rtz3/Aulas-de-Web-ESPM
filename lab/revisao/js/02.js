let btn = document.getElementById("btn");
btn.addEventListener("click", analise);

function analise() {
    let palavra1 = String(document.getElementById("palavra1").value);
    let palavra2 = String(document.getElementById("palavra2").value);

    let indiceMax = Math.max(palavra1.length + palavra2.length);
    let palavraNv = ""

    for (let i = 0; i < indiceMax; i++) {
        if (i < palavra1.length) {
            let novaPar = palavra1.charAt(i);
            palavraNv += novaPar;
        }
        
        if (i < palavra2.length) {
            let novaImpar = palavra2.charAt(i);
            palavraNv += novaImpar;
        }
    }

    alert("Nova string s3: " + palavraNv);
}