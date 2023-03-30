// [M1S2] Ex 8 - Polígono Regular
// Um polígono é regular quando é convexo e possui todos os lados e ângulos de mesma medida. Por isso um polígono regular é equilátero, pois todos os lados são de mesmo comprimento, e equiângulo, visto que todos os ângulos possuem a mesma medida.
// Crie uma lógica que receba o 
// Deve-se calcular e colocar em uma condicional if ou switch/case  e estas devem consolar o seguinte:
// Requisitos: tr
// 2 - medida do lado (em cm). 



const calculate = document.getElementById('submit');


const inf1 = document.getElementById('numerolados').value; 
const numerolado = document.getElementById('numerolados').value; 
let poligono

calculate.addEventListener('click', () => {   


    const inf1 = document.getElementById('numerolados').value; 
    const key = inf1;

    // console.log("sw inf 1 .."+" "+inf1+" "+numerolado);

    switch (key) {

        case "3":
            console.log("case 3")                
            // Se o número de lados for igual a 3 apresentar no console "triângulo" e o valor da área
 
                // console.log("número de lados "+inf1);
                console.log("triângulo")
                poligono = "\<br>\...é um polígono de "+numerolado+" lados."
                document.getElementById("html1").innerHTML=("valor de numerolado "+inf1+poligono);

            break;    
        case "4":
            console.log("case 4")                // Se o número de lados for igual a 4 apresentar no console "quadrado" e o valor da área.
                // console.log("número de lados "+inf1);
                console.log("quadrado")
                poligono = "\<br>\...é um polígono de "+inf1+" lados."
                document.getElementById("html1").innerHTML=("valor de numerolado "+inf1+poligono);
            break;
        case "5":
            console.log("case 5")                // Se o número de lados for igual a 5 apresentar no console "pentágono" e o valor da área.
                // console.log("número de lados "+inf1);
                console.log("pentágono")
                poligono = "\<br>\...é um polígono de "+inf1+" lados."
                document.getElementById("html1").innerHTML=("valor de numerolado "+inf1+poligono);
            break;
        default:                
                poligono = "\<br>...Não é um polígono";
                document.getElementById("html1").innerHTML=("valor de numerolado "+inf1+poligono);
                break;
    }

    // console.log("inf 1.."+inf1+" "+numerolados);
 
});



