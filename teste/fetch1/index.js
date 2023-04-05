
function buscaCep(){
    console.log(informacaocep);
// Solicitação GET.
fetch('https://brasilapi.com.br/api/cep/v2/'+document.getElementById("informacaocep").value)
    // Tratamento do sucesso
    .then(response => response.json())  // converter para json
    .then(json => console.log(json))    //imprimir dados no console
    .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch  
    document.getElementById("dadosCep").innerHTML = "response.json()";  
};


// async function buscaCep() {
//     const cepRequest = await fetch("https://brasilapi.com.br/api/cep/v1/88010030")
//     const meuCep = await meuCep.json();
//     }
