let btn = document.getElementById("btn");
btn.addEventListener("click", analise);

function analise() {
    let palavra1 = String(document.getElementById("palavra1").value);
    let palavra2 = String(document.getElementById("palavra2").value);

    if (palavra1.length != palavra2.length) {
        alert("Devem ter o mesmo número de caracteres")
    } else if (palavra1.length % 2 == 1 || palavra2.length % 2 == 1) {
        alert("Não pode ser strings ímpares")
    } else {

        let tmn = palavra1.length;

        let palavraCom1 = ""
        let palavraFim1 = ""

        let palavraCom2 = ""
        let palavraFim2 = ""

        for (let i = 0; i < palavra1.length; i++) {

            let nmr = i + 1;

            if (nmr < tmn / 2) {
                palavraCom1 += palavra1.charAt(i)

                palavraCom2 += palavra2.charAt(i)
            }

            if (nmr == tmn / 2) {
                palavraCom1 += palavra1.charAt(i)
                palavraFim1 = palavra1.slice(nmr);

                palavraCom2 += palavra2.charAt(i)
                palavraFim2 = palavra2.slice(nmr);
            }
        }

        alert(palavraCom1 + palavraFim2)
        alert(palavraCom2 + palavraFim1)
        
    }
}