// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

// Requisitos:  
// O algoritmo que retorna a maior palavra, deve retornar a palavra com o maior número de caracteres, para testar adicione outros valores e veja o resultado 
// O algoritmo que retorna a menor palavra, deve retornar a palavra com o menor número de caracteres, para testar adicione outros valores e veja o resultado 

// console.log(array)

const array = ['java', 'javascript', 'python', 'html', 'css'];
const array1 = ['java', 'javascript', 'python', 'html', 'css','cobol','fortran','assembler','Objective-C','c']
let str,str1;
let count;
let maiorpalavra = array[0];
let menorpalavra = array[0];
let palavra;

// str = ['Hello, world','Caldeirao da vovo'];
// str1 = array[0];
// palavra = str[1].length;
// console.log("...."+array.length,"...."+str1.length,"...."+palavra)
let i=0;
array.forEach(element => {
    // console.log("Posiçã do array................."+i);
    // console.log("interando o array...............");
    count = array[i].length
 
        if(maiorpalavra.length < count){
            maiorpalavra = array[i];
            // console.log("no if a maior palavra é "+maiorpalavra);
        };
        if(menorpalavra.length > count){
            menorpalavra = array[i];
            // console.log("no if a menor palavra é "+menorpalavra);
        };
        // console.log("palavra..."+array[i],"contador..."+count,"menor palavra..."+menorpalavra,"maior palavra..."+maiorpalavra);
        i++;

        

});
console.log("...............Primeira interação com array...................");
console.log(array)
console.log("Resultado final desta interação...ARRAY...");
console.log("a menor palavra é :",menorpalavra);
console.log("a maior palavra é :",maiorpalavra);
console.log("..............................................................");
console.log("..............................................................");
console.log("..............................................................");

i=0;
array1.forEach(element => {
    // console.log("Posiçã do array................."+i);
    // console.log("interando o array...............");
    count = array1[i].length
 
        if(maiorpalavra.length < count){
            maiorpalavra = array1[i];
            // console.log("no if a maior palavra é "+maiorpalavra);
        };
        if(menorpalavra.length > count){
            menorpalavra = array1[i];
            // console.log("no if a menor palavra é "+menorpalavra);
        };
        // console.log("palavra..."+array1[i],"contador..."+count,"menor palavra..."+menorpalavra,"maior palavra..."+maiorpalavra);
        i++;

        

});
console.log("...............Segunda interação com array...................")
console.log(array1)
console.log("Resultado final desta interação...ARRAY1...")
console.log("a menor palavra é :",menorpalavra);
console.log("a maior palavra é :",maiorpalavra);




