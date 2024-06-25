let produtos = [];

document.getElementById('produtoForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let nome = document.getElementById('nome').value;
  let descricao = document.getElementById('descricao').value;
  let preco = parseFloat(document.getElementById('preco').value);
  let estoque = document.getElementById('estoque').value;

  if (nome && descricao && !isNaN(preco)) {
    let produto = { nome, descricao, preco, estoque };
    produtos.push(produto);

    produtos.sort((a, b) => a.preco - b.preco);

    let table = document.getElementById('produtoTable');
    for (let produto of produtos) {
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);

      cell1.innerHTML = produto.nome;
      cell2.innerHTML = "R$ " + produto.preco.toFixed(2);
      cell3.innerHTML = produto.estoque === 'sim' ? 'Sim' : 'Não';

      let removeButton = document.createElement('button');
      removeButton.textContent = 'Remover';
      removeButton.addEventListener('click', () => {
        let index = produtos.indexOf(produto);
        produtos.splice(index, 1);
        row.parentNode.removeChild(row);
      });
      cell4.appendChild(removeButton);
    }
  } else {
    alert('Preencha todos os campos antes de adicionar o produto.');
  }
});
