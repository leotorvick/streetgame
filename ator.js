let posXAtor = 100;
let posYAtor = 366;



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

function limiteBorda(){
    return posYAtor < 366;
}
    