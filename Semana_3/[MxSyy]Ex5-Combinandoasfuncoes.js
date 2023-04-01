// Concatena as duas funções anteriores para que termos um programa que checa se cada número de uma lista (array) é par ou ímpar e informa na tela. 

function parouimpar (ah) {

    const resultado = (ah/2) % 2 == 0
    let bh
    var resto = ah % 2;

    if (resto == 0) {
        bh = "número "+ah+" é par!"

    } else {
        bh = "número "+ah+" é impar!"
    };
    
    return bh;

};


let i = 0;
const array = [1,2,3,4,5,6,7,8,9,10];
function interaarray (){
array.forEach(element => {
    console.log(array[i],parouimpar(array[i]));
    i++;
    
});

}

interaarray()

