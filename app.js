let vinhos = [];

function addVinho() { //button e prompts
  const nome = prompt("Escreva o nome do vinho");
  const tipo = prompt("Escreva o tipo do vinho");
  const safra = prompt("Escreva a Safra do vinho");
  const preco = prompt("Escreva o preço do vinho");

  vinhos.push({nome, tipo, safra, preco}); // puxar os dados
}

function listaVinhos() {
    const vinhosDiv = document.getElementById("vinhos");
    vinhosDiv.innerHTML = "";

    vinhos.forEach((vinho1, index) => { //criar a lista com os dados 
      const div = document.createElement("div");
      div.innerHTML = `Vinho ${index + 1}: Nome do Vinho: ${vinho1.nome}, Tipo: ${vinho1.tipo}, Safra: ${vinho1.safra}, Preço: ${vinho1.preco}`;
      vinhosDiv.appendChild(div);
    });
  }