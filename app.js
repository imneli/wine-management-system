// checkpoint 1 - start

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

// checkpoint 1 - end

// checkpoint 2 - start

function calcularVinhos () {
  const pessoas = Number(prompt('Digite a quantidade de covidados da festa: '));
  const ml = Number(prompt('Digite a quantidade de consumo de cada convidado (ml): '));

  const consumoTotal = pessoas * ml;

  const precoGarrafa1 = 100;
  const precoGarrafa2 = 200;
  const preco750 =  (consumoTotal / 750) * precoGarrafa1;
  const preco1500 =  (consumoTotal / 1500) * precoGarrafa2;

  let opcao = Number(prompt(`Escolha a opção de garrafa que você deseja: \n1 = 750ml - R$${precoGarrafa1.toFixed(2)} \n2 = 1.5L - R$${precoGarrafa2.toFixed(2)}`));

  switch (opcao) {
    case 1:
      preco = preco750
      break
    case 2:
      preco = preco1500
      break
    default:
      alert('Valor inválido! Escolha entre 1 ou 2')
      return calcularVinhos()
  }
  alert(`O preço final fica R$${preco.toFixed(2)}, Obrigado por comprar conosco!`)
}

//checkpoint 2 - end