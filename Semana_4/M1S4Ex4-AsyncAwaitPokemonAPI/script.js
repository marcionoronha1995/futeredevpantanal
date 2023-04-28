// Deve ser criada uma função que possui a funcionalidade de pesquisar Pokemons, esta função deve receber um argumento, o nome do pokemon.
// Deve-se aguardar a resposta da API
// Se obtivemos sucesso na requisição deverá ser criado um objeto com as seguintes informações sobre o Pokemon,.
//  {
// "hp": valor do hp do pokemon
// "attack": valor do ataque do pokemon
// "defense": valor de defesa do pokemon
// "special-attack": valor do ataque especial do pokemon
// "special-defense": valor da defesa especial do pokemon
// "speed": valor da velocidade do pokemon
// }
// Todas essas informações devem vir diretamente da API, caso alguma 	 chaves não exista, a chave específica deve ter o valor null
// Esse objeto deve ser retornado pela função
// Se tivermos falha na requisição, devemos consolar  a mensagem de erro e retornar esse resultado.
// Documentação: https://pokeapi.co/

const objPokemon = {
  "id":"",
  "name":"",
  "hp":"",
  "attack": "",
  "defense": "",
  "special-attack": "",
  "special-defense": "",
  "speed": "",
}
async function pesquisaPokemon() {
  const endpoint = document.getElementById("nomePokemon").value;
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+endpoint);
  const jsonData = await response.json();
  console.log(jsonData);
  document.getElementById("NomedoPokemon").innerHTML = `Nome do Pokemon: ${jsonData.name}`;
  document.getElementById("IddoPokemon").innerHTML = `Nome do Pokemon: ${jsonData.id}`;

  console.log("estou na função principal valor do endpoint ", endpoint);

  pesquisaHPPokemon();

  };

  async function pesquisaHPPokemon() {

    const endpoint = document.getElementById("nomePokemon").value;
    console.log("dentro do pesquisa HP, valor do endpoint ",endpoint)
    const response = await fetch("https://pokeapi.co/api/v2/characteristic/"+endpoint);
    const jsonData = await response.json();
    console.log(jsonData);
    document.getElementById("HPdoPokemon").innerHTML = `HP do Pokemon: ${jsonData.highest_stat.url+endpoint}`;



  };

