# Checkpoint 2 - Web Development - FIAP | 1ESPJ

## Nomes

<h2>

<li>Matheus Montovaneli</li>
<li>André Rocha</li>
<li>Caio Suzano</li>
<li>Lucas Vasquez</li>
<li>Guilherme Linard </li>

## Code

<h2>
<li><a href="https://github.com/imneli/wine-management-system/blob/main/app.js">Redirect Code</a></li>


# Winery Management 🍷

<p>🇧🇷 | Usando Javascript, HTML e CSS!</p>
<p>🇺🇸 | Using Javascript, HTML and CSS!</p>

# Code | app.js

<img src="https://i.imgur.com/OZAX0Ci.png"/>

# Explicação Código
Primeiramente criamos a função e pedimos para o usuário passar a quantidade de convidados e a média de consumo de cada um deles em ml:
```JS
function calcularVinhos () {
  const pessoas = Number(prompt('Digite a quantidade de covidados da festa: '));
  const ml = Number(prompt('Digite a quantidade de consumo de cada convidado (ml): '));

  const consumoTotal = pessoas * ml;
```

Logo em seguida calculamos o consumo total e os preços de cada garrafa:
```JS
  const precoGarrafa1 = 100;
  const precoGarrafa2 = 250;
  const preco750 =  (consumoTotal / 750) * precoGarrafa1;
  const preco1500 =  (consumoTotal / 1500) * precoGarrafa2;
```
Finalizamos pedindo para o usuário escolher a opção de garrafa desejada e o preço final conforme as garrafas escolhidas:
```JS
let opcao = Number(prompt(`A quantidade de vinho necessária para a festa é ${consumoTotal}mls. Portanto, você pode escolher entre 2 tipos de garrafas. \n \n750ml cada uma custando R$${precoGarrafa1} e com um total de R$${preco750.toFixed(2)}\n1.5L cada uma custando R$${precoGarrafa2} e com um total de R$${preco1500.toFixed(2)}. \n \nQual delas você deseja? (1 - 750ml, 2 - 1.5L)`));

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
```
