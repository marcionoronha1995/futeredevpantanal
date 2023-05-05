// Transforme o código de checagem de pares e ímpares em uma FUNÇÃO. Lembre-se de chamar a função ao final do código para ela ser executada.

function parouimpar () {

    let ah = (prompt('Informe o número por favor:...'));

    const resultado = (ah/2) % 2 == 0
    let bh
    var resto = ah % 2;

    if (resto == 0) {
        bh = "número "+ah+" é par!"

    } else {
        bh = "número "+ah+" é impar!"
    };
    
    const pagina = ["Você digitou "+ah,bh];

    alert(pagina);

};

parouimpar();1

