// [M1S2] Ex 8 - Polígono Regular
// Um polígono é regular quando é convexo e possui todos os lados e ângulos de mesma medida. Por isso um polígono regular é equilátero, pois todos os lados são de mesmo comprimento, e equiângulo, visto que todos os ângulos possuem a mesma medida.
// Crie uma lógica que receba o 
// Deve-se calcular e colocar em uma condicional if ou switch/case  e estas devem consolar o seguinte:
// Requisitos: tr
// 1 - número de lados de um polígono regular  
let numerolado = 0;
// 2 - medida do lado (em cm). 
let medidalado = 0;


function triangulo(numerolado) {
  switch (true){
    case (numerolado < 3): 
        // Caso o número de lados seja inferior a 3 apresentar no console "não é polígono"..
        console.log("não é polígono");
        break;
    case (numerolado = 3):
        // Se o número de lados for igual a 3 apresentar no console "triângulo" e o valor da área
        console.log("número de lados "+numerolado);
        break;
    case (numerolado = 4):
        // Se o número de lados for igual a 4 apresentar no console "quadrado" e o valor da área.
        console.log("número de lados "+numerolado);
        break;
    default:
        console.log("fora de escopo");
        break;
    // case (numerolado = 5):
    //     // Se o número de lados for igual a 5 apresentar no console "pentágono" e o valor da área.
    //     console.log("número de lados "+numerolado);
    //     break;
}
  console.log("valor de numerolado "+numerolado)
  numerolado = 0;
};
