import { fetchCep } from "./cep.js";

fetchCep

// Deverá ser criada uma função com a funcionalidade de pesquisa de CEP, onde passando
// como argumento um valor em formato de CEP (Ex. 88010-030), deve retornar as informações
// do endereço deste CEP
let CEP;

function buscarCep() {

    let valorCEP = document.getElementById("CEP").value

    document.getElementById("dadosdoCep").innerHTML = valorCEP;
    let urlCep = "https://brasilapi.com.br/api/cep/v2/"+valorCEP;
    
    console.log(urlCep);

    console.log("0001a")

    fetchCep(urlCep);





// ● Deve-se aguardar a resposta da API
// ● Se tiver sucesso na requisição, a aplicação deverá mostrar todos os dados dentro de
// um console.log() e também retornar esses dados
// ● Se tivermos falha na requisição, devemos consolar a mensagem de erro e retornar
// esse resultado.
// Recomenda-se a utilização da API do BrasilAPI:
// Documentação: https://brasilapi.com.br/


};

export {buscarCep}