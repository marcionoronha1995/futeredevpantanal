// Crie um código que itera sobre a lista de números até que ela encontre um número par ou ímpar. Quando encontrado, o programa precisa avisar que encontrou e qual é o número.
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
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
const array = [1,"s",2,"e",3,4,"r",5,6,"t","y","u","eu vi um gatinho","10",'10',"i",7,8,"o","p",9,"q",10,"n"];
array.forEach(element => {

    let xyz = array[i];
    if (isNumber(array[i])) {
        console.log("encontrei um número ",array[i],". Este número é ",parouimpar(xyz));
    }; 


    i++; 

    
});
