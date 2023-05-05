import { divisao, exponenciacao, mmodulo, multiplicacao, soma, subtracao } from "./operators/oerator.js";

soma
subtracao
multiplicacao
divisao
exponenciacao
mmodulo


// Em calculator.js é necessário a criação de uma função


// ● Esta função vai receber três argumentos, na primeira e segunda posição vai receber os
// valores que serão feitas as operações matemáticas em formato de número, e na
// terceira posição deverá receber um operador em formato de string
const calculardora = (arg1,arg2,arg3) => {


// 1. Caso receba o operador “+”, deverá chamar a função de adição importada do
// arquivo operators.js e retornar o resultado
if(arg3 === '+'){
    soma(arg1,arg2);

}


// 2. Caso receba o operador “-”, deverá chamar a função de subtração importada do
// arquivo operators.js e retornar o resultado
if(arg3 === '-'){
    subtracao(arg1,arg2);

}


// 3. Caso receba o operador “*”, deverá chamar a função de multiplicação
// importada do arquivo operators.js e retornar o resultado
if(arg3 === '*'){
    multiplicacao(arg1,arg2);

}


// 4. Caso receba o operador “/”, deverá chamar a função de adição importada do
// arquivo operators.js e retornar o resultado
if(arg3 === '/'){
    divisao(arg1,arg2);

}


// Caso receba o operador “**”, deverá chamar a função de exponenciação
// importada do arquivo operators.js e retornar o resultado
if(arg3 === '**'){
    exponenciacao(arg1,arg2);

}


// 6. Caso receba o operador “%”, deverá chamar a função de módulo importada do
// arquivo operators.js e retornar o resultado
if(arg3 === '%'){
    mmodulo(arg1,arg2);

}


};

export {calculardora}
