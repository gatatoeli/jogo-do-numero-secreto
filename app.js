let listaNumerosGerados = [];
let numeroLimite = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTesxtoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;//anotar importante
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial(){
    exibirTesxtoNaTela('h1', 'O Jogo do número secreto.');
    exibirTesxtoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    let palavraTentativa = tentativas > 1 ? 'tentaivas' : 'tentativa';

    if(chute == numeroSecreto){
        exibirTesxtoNaTela('h1', 'Acertou!');

        let mensagemTentativas = `Você descoriu o número 
        secreto com ${tentativas} ${palavraTentativa}.`;

        exibirTesxtoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(chute > numeroSecreto){
        exibirTesxtoNaTela('p', 'O número secreto é menor.');

    } else{
        exibirTesxtoNaTela('p', 'O número secreto é maior.');
    }
    tentativas ++;
    limparCampo();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeElementosLista = listaNumerosGerados.length;

    if(quantidadeElementosLista == 3){
        listaNumerosGerados = [];
    }

    if(listaNumerosGerados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosGerados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';//anotar
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);//anotar
}

