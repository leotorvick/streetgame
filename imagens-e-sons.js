let imgFundo;
let imgAtor;
let imgCarro1;
let imgCarro2;
let imgCarro3;

// Sons do jogo
let trilhaSonora;
let somColisao;
let somPontuacao;

function preload(){
    imgFundo = loadImage("libraries/imagens/estrada.png");
    imgAtor = loadImage("libraries/imagens/ator-1.png");
    imgCarro1 = loadImage("libraries/imagens/carro-1.png");
    imgCarro2 = loadImage("libraries/imagens/carro-2.png");
    imgCarro3 = loadImage("libraries/imagens/carro-3.png");
    imgCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro1, imgCarro3, imgCarro2];
    trilhaSonora = loadSound("libraries/sons/trilha.mp3");
    somColisao = loadSound("libraries/sons/colidiu.mp3");
    somPontuacao = loadSound("libraries/sons/pontos.wav");
}