const request = fetch("https://brasilapi.com.br/api/cep/v1/88010030") //Promise {<pending>}
console.log(request) //Promise {<pending>} ou Promise {<rejected>}

async function buscaCep() {
    const cepRequest = await fetch("https://brasilapi.com.br/api#tag/CEP-V2/cep/v2/88010030")
    const meuCep = await meuCep.json()
    }
    buscaCep()
    
    {cep}