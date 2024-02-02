let listaDeNumerosSorteados = [];
let maximaTentativas = 10;
let numeroSecreto;
let tentativa = 1;

function gerarNumeroAleatorio() {
    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * 10 + 1);
    } while (listaDeNumerosSorteados.includes(numeroAleatorio)); // Garante que o número não se repita
    listaDeNumerosSorteados.push(numeroAleatorio); // Adiciona o número à lista
    return numeroAleatorio;
}

function exibirTexto(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function mensagemInicial() {
    exibirTexto("h1", "Jogo do Número Secreto");
    exibirTexto("p", "Escolha um número entre 1 e 10");
}

function exibirNumeroSecreto() {
    console.log("Número Secreto:", numeroSecreto);
}

function verificarChute() {
    let chute = parseInt(document.querySelector("input").value);

    if (chute === numeroSecreto) {
        exibirTexto("h1", "Você acertou!");
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}.`;
        exibirTexto("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute < numeroSecreto) {
            exibirTexto("p", "Um pouco mais!");
        } else {
            exibirTexto("p", "Um pouco menos!");
        }
        tentativa++;
        limparChute();
    }
}

function limparChute() {
    document.querySelector("input").value = "";
}

function reiniciarJogo() {
    listaDeNumerosSorteados = []; // Limpa a lista ao reiniciar o jogo
    numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativa = 1;
    mensagemInicial();
    exibirNumeroSecreto();
}

// Inicialização do jogo
numeroSecreto = gerarNumeroAleatorio();
mensagemInicial();
exibirNumeroSecreto(); // Adicionado para exibir o número secreto no console
