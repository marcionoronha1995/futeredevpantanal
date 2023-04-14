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
    
};
