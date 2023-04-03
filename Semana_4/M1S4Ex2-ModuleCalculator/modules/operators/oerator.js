
let a,b
// 1. adição, essa função deve receber dois argumentos, ela deve realizar a soma de ambos
// os valores e retornar o resultado
const soma = (a,b) =>{
 let resultado = a + b;
 console.log(resultado)
}


// 2. subtração, essa função deve receber dois argumentos, ela deve realizar a subtração de
// ambos os valores e retornar o resultado
const subtracao = (a,b) =>{
    let resultado = a - b;
    return resultado;
}


// 3. multiplicação, essa função deve receber dois argumentos, ela deve realizar a
// multiplicação de ambos os valores e retornar o resultado
const multiplicacao = (a,b) =>{
    let resultado = a * b;
    console.log(resultado);
    
}


// 4. divisão, essa função deve receber dois argumentos, ela deve realizar a divisão entre os
// valores e retornar o resultado
const divisao = (a,b) =>{
    let resultado = a / b;
    console.log(resultado);
    
}


// 5. exponenciação, essa função deve receber dois argumentos, ela deve realizar a
// exponenciação de um valor pelo outro e retornar o resultado
const exponenciacao = (a,b) =>{
    let resultado = a ** b;
    console.log(resultado);    
    
}


// 6. módulo, essa função deve receber dois argumentos, ela deve realizar o módulo de
// dois valores e retornar o resultado
const mmodulo = (a,b) =>{
    let resultado = a % b;
    console.log(resultado); 
    
}

export{mmodulo,soma,subtracao,divisao,exponenciacao,multiplicacao}