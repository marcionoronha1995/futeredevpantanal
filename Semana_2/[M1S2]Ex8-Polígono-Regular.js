// [M1S2] Ex 8 - Polígono Regular
// Um polígono é regular quando é convexo e possui todos os lados e ângulos de mesma medida. Por isso um polígono regular é equilátero, pois todos os lados são de mesmo comprimento, e equiângulo, visto que todos os ângulos possuem a mesma medida.
// Crie uma lógica que receba o 
// Deve-se calcular e colocar em uma condicional if ou switch/case  e estas devem consolar o seguinte:
// Requisitos: tr
// 2 - medida do lado (em cm). 



const calculate = document.getElementById('submit');


const inf1 = document.getElementById('numerolados').value; 

calculate.addEventListener('click', () => {   


    const inf1 = document.getElementById('numerolados').value; 

    console.log("sw inf 1 .."+" "+inf1+" "+numerolados)


  switch(inf1){
    case 0:
        console.log("case 0");
        break;
    case 1:
            console.log("case 01");
        break;
    case 2:
        console.log("case 02");
        break;
    case 3:
            console.log("case 03");
        break;        
    // case (numerolado < 3): 
    //     // Caso o número de lados seja inferior a 3 apresentar no console "não é polígono"..
    //     console.log("não é polígono");
    //     poligono = "\<br>\...é um polígono de "+numerolado+" lados."        
    //     break;
    // case 3:
    //     // Se o número de lados for igual a 3 apresentar no console "triângulo" e o valor da área
    //     console.log("número de lados "+inf1);
    //     poligono = "\<br>\...é um polígono de "+inf1+" lados."
    //     document.getElementById("html1").innerHTML=("valor de numerolado "+inf1+poligono);
    //     break;
    // case 4:
    //     // Se o número de lados for igual a 4 apresentar no console "quadrado" e o valor da área.
    //     console.log("número de lados "+inf1);
    //     poligono = "\<br>\...é um polígono de "+inf1+" lados."
    //     document.getElementById("html1").innerHTML=("valor de numerolado "+inf1+poligono);
    //     break;
    // case 5:
    //     // Se o número de lados for igual a 5 apresentar no console "pentágono" e o valor da área.
    //     console.log("número de lados "+inf1);
    //     poligono = "\<br>\...é um polígono de "+inf1+" lados."
    //     document.getElementById("html1").innerHTML=("valor de numerolado "+inf1+poligono);
    //     break;
    // default:
    //     console.log("Não é um polígono");
    //     poligono = "\<br>...Não é um polígono";
    //     document.getElementById("html1").innerHTML=("Número de lados "+"-"+inf1+"-"+poligono);
    //     break;
    }   

 
});

console.log("inf 1"+inf1+numerolados)

