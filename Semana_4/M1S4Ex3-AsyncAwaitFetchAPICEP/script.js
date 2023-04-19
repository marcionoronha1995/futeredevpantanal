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
    
    console.log("https://brasilapi.com.br/api/cep/v2/"+infCEP)
    let infCEPapi = "https://brasilapi.com.br/api/cep/v2/"+infCEP
    console.log("este é o valor a ser buscado ",infCEPapi)

    const CEPobject= {cep:"",cidade:"",estado:""}
    console.log(" cep valor CEP Objeto ... ",CEPobject)

    fetch(infCEPapi)    // Tratamento do sucesso
    .then(response => response.json())  // converter para json
    .then(json => CEPobject = json)
    // .then(json => CEPobject.cidade = json.city)
    // .then(json => CEPobject.estado = json.state)
    // .then(json => console.log("Valor do CEP em Fetch:.....    ",json.cep))    //imprimir dados no console
    // .then(json => console.log("State:...    ",json.state))    //imprimir dados no console
    // .then(json => console.log("Estado: ",json.state)) 
    // .then(json => console.log("Cidade: ",json.city)) 
    .then(json => document.getElementById("CEPjson").innerHTML = json)
    // .then(json => CEPobject.cep = json.cep)
    .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch


//     "cep": "89010025",
//     "state": "SC",
//     "city": "Blumenau",



    document.getElementById("CEPinformado").innerHTML = infCEP;
    document.getElementById("CEPdados").innerHTML = `${CEPobject}... Valor do CEP `;
    console.log("CEP "+CEPobject.cep+'\br'+"Estado: "+CEPobject.estado)
  
    

    
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



// by brasil
// {
//     "cep": "89010025",
//     "state": "SC",
//     "city": "Blumenau",
//     "neighborhood": "Centro",
//     "street": "Rua Doutor Luiz de Freitas Melro",
//     "service": "viacep",
//     "location": {
//       "type": "Point",
//       "coordinates": {
//         "longitude": "-49.0629788",
//         "latitude": "-26.9244749"
//       }
//     }
//   }
