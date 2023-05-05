// Utilize o SPREAD para criar um novo array, ampliado, contendo os números do array que vc já está utilizando e novos números.

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
const array1 = ['java',52, 'javascript',101, 'python', 'html', 'css',221,'cobol',332,'fortran','assembler',444,'Objective-C','c'];
const array2 = [...array,...array1];

array2.forEach(element => {

    let xyz = array2[i];
    if (isNumber(array2[i])) {
        console.log("encontrei um número ",array2[i],". O ",parouimpar(xyz));
    }; 


    i++; 

    
});