function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imgFundo);
  mostraAtor();
  mostraCarro();
  moveCarro();
  moveAtor();
  voltaCarroPosicaoInicial();
  colisaoAtorCarro();
  incluiPontos();
  marcaPontos();
}
