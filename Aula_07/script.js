document.getElementById('botaoComecar').addEventListener('click', () => {
    document.getElementById('paginaselecao').style.display = 'none';
    document.getElementById('paginajogo').style.display = 'block';
});

let jogadorAtual = 'x';
let jogoAcabou = false;

const celulas = document.querySelectorAll('.celula');
const combinacoesVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];
celulas.forEach(celula => {
    celula.addEventListener('click', () => {
         if (celula.textContent.trim() !== '' || jogoAcabou) {
            return;
        }
              celula.textContent = jogadorAtual;
               if (verificarVitoria()) {
            alert('O jogador  ' + jogadorAtual + ' ganhou!');
            jogoAcabou = true;
            return; 
        }
 jogadorAtual = jogadorAtual === 'x' ? 'o' : 'x';
    });
});
function verificarVitoria() {
    for (let i = 0; i < combinacoesVitoria.length; i++) {
        const [a, b, c] = combinacoesVitoria[i]; 

        const valorA = celulas[a].textContent.trim();
        const valorB = celulas[b].textContent.trim();
        const valorC = celulas[c].textContent.trim();

        if (valorA !== '' && valorA === valorB && valorB === valorC) {
            return true;
        }
    }
    return false; 
}