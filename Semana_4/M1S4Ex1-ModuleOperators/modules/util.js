const conversorReais = () => {

    let onumero =  parseInt(4);
    const eformatado = onumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log("O número "+onumero+". Em reais fica "+eformatado);

};

const conversorCPF = () => {
    // console.log("...dentro do conversorCPF");
    let numcpf = '11145678911';
    let v = numcpf

    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos

    console.log("O string "+numcpf+", com a máscara de CPF fica "+v);
    
};


const ordenadorArray = () =>{
    // console.log("...dentro do ordenadorArray");
    const fruit = ['cherries', 'apples', 'bananas'];
    let novafruit = [...fruit];
    novafruit = novafruit.sort(); // ['apples', 'bananas', 'cherries']
    console.log("Antes ("+fruit+")"+" e depois ("+novafruit+")")



};

export{conversorReais,conversorCPF,ordenadorArray};