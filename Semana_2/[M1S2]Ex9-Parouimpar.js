
const calculate = document.getElementById('submit');

calculate.addEventListener('click', () => {

    const numeroparouimpar = document.getElementById('numero').value;
    const resultado = (numeroparouimpar/2) % 2 == 0
    let parimpar
    var resto = numeroparouimpar % 2;

    if (resto == 0) {
        console.log(numeroparouimpar + " é par");
        parimpar = " é par!"

    } else {
        console.log(numeroparouimpar + " é impar");
        parimpar = " é impar!"
    }

    document.getElementById("texto1").innerHTML=("numero digitado "+numeroparouimpar+parimpar);
});