// Utilize a estrutura de repetição for, para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. 
// Requisitos: 
// Através do algoritmo apresentar no console a palavra “indefinidamente” invertida
// Através do algoritmo apresentar no console a palavra “inconstitucionalmente” invertida
// Através do algoritmo apresentar no console a palavra “pneumoultramicroscopicossilicovulcanoconiótico” invertida

const arraypalavras = [];
const arrayletras = [];
const arrayinvert = [];
let i;

function gravaletra(uletra){
    aletra = document.getElementById('uletra').value;
    arrayletras.push(aletra);
    console.log("array de letras..  "+arrayletras," letra .....:"+aletra);
    document.getElementById("letra_escrita").innerHTML=aletra;
}

function gravapalavra(uletra){
    palavra = document.getElementById('uletra').value;
    arraypalavras.push(palavra);
    console.log("array de palavra..  "+arraypalavras," palavra .....:"+palavra);
    document.getElementById("palavra_gravada").innerHTML=palavra;
    console.log("array "+arraypalavras.length);
    console.log("palavra "+palavra+" tem "+palavra.length+" letras");
    i = 0;
    ii = 0;
    pp = palavra.length - 1;
    for (let index = 0; index < palavra.length; index++) {
        const element = palavra[ii];
        console.log("no for a palavra "+i+" element "+element);        
        arrayinvert[i]=palavra[pp];
        console.log("no for a inverção "+arrayinvert[i]);
        ii++;
        i++;
        pp--;        
    };
    console.log("invertendo a palavra - "+palavra+" - fica - "+arrayinvert.join(""));
    document.getElementById("palavra_invertida").innerHTML = arrayinvert.join("");

}

//interando com for...




