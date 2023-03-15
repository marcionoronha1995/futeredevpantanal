console.log("vou iniciar as variaveis")
let minhaidade;
let minhaaltura;
let meupeso;
let resultadodoimc;
let alertadoimc;
console.log("vai iniciar o objeto e o array")
let dados_tabela = {
        tab_altura:"minhaaltura",
        tab_idade:"minhaidade",
        tab_peso:"meupeso",
        tab_imc:"resultadodoimc",
        tab_alerta:"alertadoimc"};

let tabela = [];
let indice;

    // Não se preocupe em fazer um formulário, esta página já está funcional 
    const calculate = document.getElementById('submit')
    // Crie a sua lógica a partir deste ponto
    // Adicione seu array aqui




    


calculate.addEventListener('click', () => {
    // Esse document.getElementById, possui a informação dos inputs, capture ele utilizando uma variável
    // Exemplo: let minhaVar = document.getElementById
    // console.log(minhaVar) --> valor do document.getElement
    // MAKE - após fechar janela, limpar os valores e reiniciar os valores
console.log("roda click")
console.log("vai receber os dados digitados no html")
    minhaidade = document.getElementById('age').value 
    minhaaltura = document.getElementById('height').value
    meupeso = document.getElementById('weight').value

    console.log("vai calcular os valores")
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

    console.log("vai ver qual é o grau do imc")
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

  console.log("vai passar os valores para os itens do objeto")
  dados_tabela.tab_altura = minhaaltura;
  dados_tabela.tab_idade = minhaidade;
  dados_tabela.tab_peso = meupeso;
  dados_tabela.tab_imc = resultadodoimc;
  dados_tabela.tab_alerta = alertadoimc;
     //ele precisa acrescentar um novo objeto ao array com as novas informações
    //estou penando agora que eu preciso criar novos objetos, ter um indexador para cada objeto 
    //pode ser dados_tabela_1 dados_tabela_2
  console.log("vai fazer o push da tabela_dados em tabela")
  tabela.push({dados_tabela})


    // Adicione o objeto a ser preenchido aqui
    console.log("vai mostrar a tela com os dados")
  
    alert('Seu IMC é '+resultadodoimc+' ,você está na faixa de '+alertadoimc);
    document.getElementById("mensagemsistema").innerHTML = 'IMC ${resultadodoimc}';
 




    console.log('dados digitados .... '+minhaidade,minhaaltura,meupeso,resultadodoimc,alertadoimc);

    console.table(dados_tabela)
    console.table(tabela);

    console.log("valor do length é ...."+length)
    // console.log(length=length+1)
    console.log("versão 15 03 2023 07 50")
    console.log("fim")

    console.log("vou retornar os valores da função");
    return minhaidade,minhaaltura,meupeso,resultadodoimc,alertadoimc;



});







