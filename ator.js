let posXAtor = 100;
let posYAtor = 366;
let colisao = false;


function mostraAtor() {
    image(imgAtor, posXAtor, posYAtor, 30, 30);
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
    return posYAtor < 366;
}

function colisaoAtorCarro() {
    for (i = 0; i < imgCarros.length; i++){
        colisao = collideRectCircle(posXCarros[i], posYCarros[i], comprimentoCarros, alturaCarro, posXAtor, posYAtor, 15)
        if (colisao){
            voltaAtorInicio();
        }
    }
}

function voltaAtorInicio(){
    posYAtor = 366
}