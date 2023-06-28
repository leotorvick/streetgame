let posXAtor = 100;
let posYAtor = 369;
let colisao = false;
let pontos = 0;


function mostraAtor() {
    image(imgAtor, posXAtor, posYAtor, 26, 26);
}

function moveAtor() {
    if (keyIsDown(UP_ARROW)){
        posYAtor -= 3;
        }
    if (keyIsDown(DOWN_ARROW)){
    if (limiteBorda()){
        posYAtor += 3;
        }
    }
}

function limiteBorda() {
    return posYAtor < 369;
}

function colisaoAtorCarro() {
    for (i = 0; i < imgCarros.length; i++){
        colisao = collideRectCircle(posXCarros[i], posYCarros[i], comprimentoCarros, alturaCarro, posXAtor, posYAtor, 15)
        if (colisao){
            voltaAtorInicio();
            if (pontosMaiorQueZero()){

            }
        }
    }
}

function voltaAtorInicio(){
    posYAtor = 369
}

function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 250, 60));
    text(pontos, width/ 5, 27);
}

function marcaPontos() {
    if(posYAtor < 15){
        pontos += 1;
        voltaAtorInicio();
    }
}

function pontosMaiorQueZero() {
    if (pontos > 0){
        pontos -= 1;
    }
}