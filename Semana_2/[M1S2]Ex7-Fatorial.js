// Crie um algoritmo que faça o console de qualquer fatorial.

// Requisitos: 
// Através do algoritmo apresentar no console  o fatorial de 10
// Através do algoritmo apresentar no console  o fatorial de 17
// Através do algoritmo apresentar no console  o fatorial de 2429
// https://brasilescola.uol.com.br/matematica/fatorial.htm

// "Exemplos:
// a) 2! + 3! = (2 · 1) + (3 · 2 · 1) = 2 + 6 = 8
// b) 4! · 2! = (4 · 3 · 2 · 1) · (2 · 1) = 24 · 2 = 48.
// c) 7! - 5! =(7 · 6· 5· 4 · 3 · 2 · 1) - (5· 4 · 3 · 2 · 1) = 5040 – 120 = 4920.
// Veja também: Como resolver equação com fatorial?"
// Veja mais sobre "Fatorial" em: https://brasilescola.uol.com.br/matematica/fatorial.htm
let numero 


function calculaf(numero){
    let fatorial = 1;
    let numero1 = numero;
    let i = 0;
    let indice = numero;
    for (i; indice > i; i++) {
        fatorial = fatorial * numero;

        // console.log("i = "+i);
        // console.log("numero = "+numero);
        // console.log("fatorial = "+fatorial);

        numero --;


    };
    return fatorial;
    // console.log(numero1+"! é igual a "+fatorial);

};
let i=0;
for (i; 9 >= i;i++){
    console.log(" o fatorial de "+i+" e "+calculaf(i));
}
console.log(" o fatorial de 10 é "+calculaf(10));
console.log(" o fatorial de 17 é "+calculaf(17));
console.log(" o fatorial de 2429 é "+calculaf(2429));