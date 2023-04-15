// Deverá ser criada uma função com a funcionalidade de pesquisa de CEP, onde passando
// como argumento um valor em formato de CEP (Ex. 88010-030), deve retornar as informações
// do endereço deste CEP
// ● Deve-se aguardar a resposta da API
// ● Se tiver sucesso na requisição, a aplicação deverá mostrar todos os dados dentro de
// um console.log() e também retornar esses dados
// ● Se tivermos falha na requisição, devemos consolar a mensagem de erro e retornar
// esse resultado.
// Recomenda-se a utilização da API do BrasilAPI:
// Documentação: https://brasilapi.com.br/


function informeCEP(){
    console.log("informe o cep function");
    let infCEP = document.getElementById("informadoCEP").value;
    console.log(infCEP);
    document.getElementById("CEPinformado").innerHTML = infCEP;
    console.log("https://brasilapi.com.br/api/cep/v2/"+infCEP)
    
};

// resultado 
// {
//     "name":"CepPromiseError",
//     "message":"Todos os serviços de CEP retornaram erro.",
//     "type":"service_error",
//     "errors":
//     [{
//         "name":"ServiceError",
//         "message":"CEP NAO ENCONTRADO",
//         "service":"correios"},
//         {
//             "name":"ServiceError",
//             "message":"Erro ao se conectar com o serviço ViaCEP.",
//             "service":"viacep"
//         },
//         {
//             "name":"ServiceError",
//             "message":"Erro ao se conectar com o serviço WideNet.",
//             "service":"widenet"
//         },
//         {
//             "name":"ServiceError",
//             "message":"CEP não encontrado na base dos Correios.",
//             "service":"correios-alt"
//         }
//     ]
// }
