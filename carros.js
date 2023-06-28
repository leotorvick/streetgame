let posXCarros = [600, 600, 600, 600, 600, 600];
let posYCarros = [40, 95, 150, 211, 263, 318];
let velocidadeCarros = [3, 2.5, 3.3, 3.8, 2, 3.5];
let comprimentoCarros = 50;
let alturaCarro = 40;

function mostraCarro() {
    for (let i = 0; i < imgCarros.length; i++){
        image(imgCarros[i], posXCarros[i], posYCarros[i], comprimentoCarros, alturaCarro);
    }
}

function moveCarro() {
    for (let i = 0; i < imgCarros.length; i++){
        posXCarros[i] -= velocidadeCarros[i];
    }
}

function voltaCarroPosicaoInicial(){  
    for (let i = 0; i < imgCarros.length; i++){
        if (percorreTelaInteira (posXCarros[i])){
        posXCarros[i] = 600;
        }
    }
}

function percorreTelaInteira(posXCarros){
    return posXCarros < -50;
}