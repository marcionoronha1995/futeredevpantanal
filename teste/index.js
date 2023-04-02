import { funcasoma, funcsubtrair } from "./modules/mod.js";

funcasoma
funcsubtrair

let a = 32;
let b = 2;

function calculadora(a,b){
 console.log("soma ... ",funcasoma(a,b));
 console.log("subrair .",funcsubtrair(a,b));

};

calculadora(a,b);