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


async function pesquisaPokemon() {
    const infCEP = document.getElementById("nomePokemon").value;
    const response = await fetch("https://brasilapi.com.br/api/cep/v2/"+infCEP);
    const jsonData = await response.json();
    console.log(jsonData); 

  };

  pesquisaPokemon();