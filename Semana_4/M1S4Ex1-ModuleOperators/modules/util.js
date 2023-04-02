const conversorReais = () => {
    console.log("...dentro do conversorReais");
    let onumero = prompt("Digite um número:");
    const emreal = (onumero).toLocaleString('en-US',{style:'currency',currency:'R$'});
    console.log("O número "+onumero+". Em real fica "+emreal);


};

const conversorCPF = () => {
    console.log("...dentro do conversorCPF");
};

const ordenadorArray = () =>{
    console.log("...dentro do ordenadorArray");
};

console.log(conversorCPF())
console.log(conversorReais())
console.log(ordenadorArray())

conversorReais

export{conversorReais,conversorCPF,ordenadorArray};