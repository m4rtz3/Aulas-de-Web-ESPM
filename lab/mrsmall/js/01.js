//CRIPTOGRAFAR

let botaoC = document.getElementById("botaoC");
botaoC.addEventListener("click", Cript);

function Cript() {

    //pega dos campos a senha descriptografa e o numero para deslocamento
    let senhaAntes = document.getElementById("campoSenha").value;

    senhaAntes = senhaAntes.replace(/[áãàâä]/g, 'a')
        .replace(/[êéèë]/g, 'e')
        .replace(/[íìîï]/g, 'i')
        .replace(/[ôóòöõ]/g, 'o')
        .replace(/[ûùúü]/g, 'u')
        .replace(/[ç]/g, 'c')
        
        .replace(/[ÁÃÀÂÄ]/g, 'A')
        .replace(/[ÊÉÈË]/g, 'E')
        .replace(/[ÍÌÎÏ]/g, 'I')
        .replace(/[ÔÓÒÖÕ]/g, 'O')
        .replace(/[ÛÙÚÜ]/g, 'U')
        .replace(/[Ç]/g, 'C');

    let numero = parseInt(document.getElementById("campoNmr").value);

    //uma string para manipular o alfabeto
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";

    //variavel para guardar a senha criptografada
    let criptografada = "";

    //checagem de numero acima de 0
    if (numero > 0) {
        //se for uma frase, será dividido em uma array
        //senao, será só uma array de um item :))
        let palavras = senhaAntes.split(" ");

        //de acordo com a quantidade de itens dentro da array,
        //haverá o loop
        for (let i = 0; i < palavras.length; i++) {

            //pegue o primeiro ou unico item da array 'palavras'
            let palavra = palavras[i];

            //criacao da variavel que conterá o item critografado
            let palavraCriptografada = "";

            //repeticao de acordo com o tamanho da string/primeiro item
            //da array palavras
            for (let j = 0; j < palavra.length; j++) {
                //variavel atual que conterá o primeiro caracter
                let atual = palavra.charAt(j); 

                //checagem pra letra maiúscula e minúscula
                if (atual === atual.toUpperCase()) {
                    let atualMenor = atual.toLowerCase();
                    if (alfabeto.includes(atualMenor)) {
                        alfabeto = alfabeto.toUpperCase();
                    }
                } else {
                    alfabeto = alfabeto.toLowerCase(); 
                }

                //se no alfabeto tiver a letra da variavel atual...
                if (alfabeto.includes(atual)) {
                    //pegue o indice de onde se encontra essa letra
                    let indiceAt = alfabeto.indexOf(atual);

                    //defina o caracter que será criptografado para como o indice atual
                    //+ numero de deslocamento de caracteres mais o módulo do tamanho do
                    //alfabeto
                    let novoInd = (indiceAt + numero) % alfabeto.length;

                    //definirá a nova letra como aquela que encontra nesse novo indice,
                    //logo, a letra criptografa:::
                    let novaAlf = alfabeto.charAt(novoInd);

                    //palavra criptografada começará a ser composto pelas novas letras
                    //criptografadas
                    palavraCriptografada += novaAlf;
                } else {
                    //senem tiver no alfabeto, ignorará
                    palavraCriptografada += atual;
                }
            }

            //a criptografia completa, sendo frase ou não, será definida por palavra
            //criptografa
            criptografada += palavraCriptografada + " ";
        }

        //pega o campo da senha nova e a ocupe com a senha nova
        let campoSenhaNova = document.getElementById("senhaFinalC");
        campoSenhaNova.innerHTML = "<p>" + criptografada.trim() + "</p>";
        campoSenhaNova.style.visibility = 'visible';

    } else {
        //se o numero for menor que zero, não será considerado
        let campoSenhaNova = document.getElementById("senhaFinalC");
        campoSenhaNova.innerHTML = "<p> Insira um número válido </p>";
        campoSenhaNova.style.visibility = 'visible';
    }
}

//DESCRIPTOGRAFAR 

let botaoD = document.getElementById("botaoD");
botaoD.addEventListener("click", Descript);

//o mesmo processo mas ao contrario

function Descript() {
    let senhaAntes = document.getElementById("campoSenhaCrip").value;
    let numero = parseInt(document.getElementById("campoNmrD").value);

    let alfabeto = "abcdefghijklmnopqrstuvwxyz";

    let descriptografada = "";

    if (numero > 0) {
        let palavras = senhaAntes.split(" ");

        for (let i = 0; i < palavras.length; i++) {
            let palavra = palavras[i];
            let palavraDescriptografada = "";

            for (let j = 0; j < palavra.length; j++) {
                let atual = palavra.charAt(j);

                //checagem pra letra maiúscula e minúscula
                if (atual == atual.toUpperCase()) {
                    let atualMenor = atual.toLowerCase();
                    if (alfabeto.includes(atualMenor)) {
                        alfabeto = alfabeto.toUpperCase();
                    }
                } else {
                    alfabeto = alfabeto.toLowerCase();
                }

                if (alfabeto.includes(atual)) {
                    let indiceAt = alfabeto.indexOf(atual);
                    let novoInd = (indiceAt - numero + alfabeto.length) % alfabeto.length;
                    let novaAlf = alfabeto.charAt(novoInd);
                    palavraDescriptografada += novaAlf;
                } else {
                    palavraDescriptografada += atual;
                }
            }

            descriptografada += palavraDescriptografada + " ";
        }
        let campoSenhaNova = document.getElementById("senhaFinalD");
        campoSenhaNova.innerHTML = "<p>" + descriptografada.trim() + "</p>";
        campoSenhaNova.style.visibility = 'visible';

    } else {
        let campoSenhaNova = document.getElementById("senhaFinalD");
        campoSenhaNova.innerHTML = "<p> Insira um número válido </p>";
        campoSenhaNova.style.visibility = 'visible';
    }
}