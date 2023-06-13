// Obtenha uma referência ao botão
const botao = document.getElementById('meuBotao');

// Defina a função a ser executada quando o botão for clicado
function alterarTexto() {
  const elemento = document.getElementById('texto');
  elemento.textContent = 'A paiN entrou em discussões informais com Gabriel "⁠FalleN⁠" Toledo e está explorando a possibilidade de adicionar o atirador de 32 anos à sua lista, embora nenhuma oferta oficial tenha sido feita até o momento e as negociações ainda estejam em estágios iniciais.A informação foi divulgada pelo Dust2.com.br, e segue na esteira de uma reportagem da Game Arena que revelou que a FURIA também havia manifestado interesse no atirador brasileiro. O co-proprietário da FURIA, Andre Akkari, confirmou que uma reunião com FalleN ocorreria nas próximas duas semanas, com pelo menos duas partes agora interessadas em garantir os serviços do capitão veterano.';
}

// Vincule a função ao evento de clique do botão
botao.addEventListener('click', alterarTexto);