let jogadorAtual = 'X';
let tabuleiro = ['', '', '', '', '', '', '', '', ''];

function jogada(casa) {
  const posicao = parseInt(casa.id);
  if (tabuleiro[posicao] !== '') return;
  
  tabuleiro[posicao] = jogadorAtual;
  casa.innerHTML = jogadorAtual;

  if (checaVitoria()) {
    alert('Jogador ' + jogadorAtual + ' venceu!');
    location.reload();
  } else {
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
  }
}

function checaVitoria() {
  const possiveisVitorias = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return possiveisVitorias.some(vitoria => {
    return vitoria.every(posicao => tabuleiro[posicao] === jogadorAtual);
  });
}

function init() {
  const casas = document.querySelectorAll('.casa');
  casas.forEach((casa, index) => {
    casa.id = index;
  });
}

init();
