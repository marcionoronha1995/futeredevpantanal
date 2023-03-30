// [M1S2] Ex 8 - Polígono Regular
// Um polígono é regular quando é convexo e possui todos os lados e ângulos de mesma medida. Por isso um polígono regular é equilátero, pois todos os lados são de mesmo comprimento, e equiângulo, visto que todos os ângulos possuem a mesma medida.
// Crie uma lógica que receba o 
// Deve-se calcular e colocar em uma condicional if ou switch/case  e estas devem consolar o seguinte:
// Requisitos: tr
// 1 - número de lados de um polígono regular  
let numerolado = document.getElementById('numerolados').value;
// 2 - medida do lado (em cm). 
let poligono;


function triangulo(numerolado) {
    
  switch(numerolado){
    // case (numerolado < 3): 
    //     // Caso o número de lados seja inferior a 3 apresentar no console "não é polígono"..
    //     console.log("não é polígono");
    //     poligono = "\<br>\...é um polígono de "+numerolado+" lados."        
    //     break;
    case 3:
        // Se o número de lados for igual a 3 apresentar no console "triângulo" e o valor da área
        console.log("número de lados "+numerolado);
        poligono = "\<br>\...é um polígono de "+numerolado+" lados."
        document.getElementById("html1").innerHTML=("valor de numerolado "+numerolado+poligono);
        break;
    case 4:
        // Se o número de lados for igual a 4 apresentar no console "quadrado" e o valor da área.
        console.log("número de lados "+numerolado);
        poligono = "\<br>\...é um polígono de "+numerolado+" lados."
        document.getElementById("html1").innerHTML=("valor de numerolado "+numerolado+poligono);
        break;
    case 5:
        // Se o número de lados for igual a 5 apresentar no console "pentágono" e o valor da área.
        console.log("número de lados "+numerolado);
        poligono = "\<br>\...é um polígono de "+numerolado+" lados."
        document.getElementById("html1").innerHTML=("valor de numerolado "+numerolado+poligono);
        break;
    default:
        console.log("fora de escopo");
        poligono = "\<br>...Não se se é um polígono";
        document.getElementById("html1").innerHTML=("valor de numerolado "+numerolado+poligono);
        break;
    }
   numerolado = 0;
};


