function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
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
