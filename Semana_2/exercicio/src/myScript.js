let minhaidade;
let minhaaltura;
let meupeso;
let resultadodoimc;
let alertadoimc;



    // Não se preocupe em fazer um formulário, esta página já está funcional 
    const calculate = document.getElementById('submit')
    // Crie a sua lógica a partir deste ponto
    // Adicione seu array aqui

    const dados_tabela = {
        tab_altura:minhaaltura,
        tab_idade:minhaidade,
        tab_peso:meupeso,
        tab_imc:resultadodoimc,
        tab_alerta:alertadoimc};

    const tabela = [];


    


calculate.addEventListener('click', () => {
    // Esse document.getElementById, possui a informação dos inputs, capture ele utilizando uma variável
    // Exemplo: let minhaVar = document.getElementById
    // console.log(minhaVar) --> valor do document.getElement
    // MAKE - após fechar janela, limpar os valores e reiniciar os valores

    minhaidade = document.getElementById('age').value 
    minhaaltura = document.getElementById('height').value
    meupeso = document.getElementById('weight').value


    minhaaltura = minhaaltura/100
    resultadodoimc = meupeso / (minhaaltura*minhaaltura)
    resultadodoimc = parseFloat(resultadodoimc.toFixed(1))

    // Menor que 16 - Magreza grave
    //16 a menor que 17 - Magreza moderada
    //17 a menor que 18,5 - Magreza leve
    //18,5 a menor que 25 - Saudável
    //25 a menor que 30 - Sobrepeso
    //30 a menor que 35 - Obesidade Grau I
    //35 a menor que 40 - Obesidade Grau II (considerada severa)
    //Maior que 40 - Obesidade Grau III (considerada mórbida)


    switch(true){
    case (resultadodoimc >= 0 && resultadodoimc <= 16):
      alertadoimc = ' Magreza grave';
      break; 
    case (resultadodoimc >= 16.1 && resultadodoimc <= 17):
      alertadoimc = ' Magreza moderada';
      break; 
    case (resultadodoimc >= 17.1 && resultadodoimc <= 18.5):
      alertadoimc = ' Magreza leve';
      break; 
    case (resultadodoimc >= 18.6 && resultadodoimc <= 25):
      alertadoimc = ' Saudável';
      break; 
    case (resultadodoimc >= 25.1 && resultadodoimc <= 30):
      alertadoimc = ' Sobrepeso';
      break; 
    case (resultadodoimc >= 30.1 && resultadodoimc <= 35):
      alertadoimc = ' Obesidade Grau I';
      break; 
   case (resultadodoimc >= 35.1 && resultadodoimc <= 39.9):
      alertadoimc = ' Obesidade Grau II (considerada severa)';
      break; 
    case (resultadodoimc >= 40):
      alertadoimc = ' Obesidade Grau III (considerada mórbida)';
      break; 
   
  }    

    // Adicione o objeto a ser preenchido aqui
  
    alert('Seu IMC é '+resultadodoimc+' ,você está na faixa de '+alertadoimc);
    document.getElementById("mensagemsistema").innerHTML = 'IMC ${resultadodoimc}';
    console.log('dados digitados .... '+minhaidade,minhaaltura,meupeso,resultadodoimc,alertadoimc);

    // dados_tabela.tab_altura = minhaaltura;
    // dados_tabela.tab_idade = minhaidade;
    // dados_tabela.tab_peso = meupeso;
    // dados_tabela.tab_imc = resultadodoimc;
    // dados_tabela.tab_alerta = alertadoimc;

    tabela.push(dados_tabela)

    console.log("versão 14 03 2023 23 01")
    console.table(tabela);
    console.table(dados_tabela)
    console.log(length=length+1)
    console.log("fim")



});







