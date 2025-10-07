telaAtual = 'tela-home'
telaAnterior = 'tela-home'

function navegar(destino){
  let telas = document.getElementsByClassName('tela')
  Array.from(telas).forEach(tela => {
    tela.classList.remove('show')
    tela.classList.add('collapse')
    // tela.classList.add('testeUso')
    console.log("usou: navegar()")
  });
  document.getElementById(destino).classList.remove('collapse')
  document.getElementById(destino).classList.add('show')
  telaAnterior = telaAtual
  telaAtual = destino
}

function voltar(){
  navegar(telaAnterior)
}

console.log("Ola Mundo!")

function mostrarDetalhes(produto, imagem, categoria, preco, descricao, nota, avaliacoes){
  navegar('tela-produto')
  let detalhes = document.getElementById('detalhes-produto')
  detalhes.innerHTML = `
  <div class="row g-3">
    <div class="col-md-4 text-center">
      <img src="${imagem}" class="img-fluid" alt="${produto}">
      </div>
      <div class="col-md-8">
        <h2>${produto}</h2>
        <p><strong>Categoria:</strong> ${categoria}</p>
        <p><strong>Preço:</strong> ${preco}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
        <p><strong>Avaliacao:</strong> ${nota} Total (${avaliacoes}) avaliações</p>
        </div>
      </div>
  `
}