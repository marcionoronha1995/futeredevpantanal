const arraydados = [];
const objdados = {peso:'',altura:''};

function gravardados(){

  let pesod = document.getElementById('Peso').value;
  let alturad = document.getElementById('Altura').value;
  objdados.peso = pesod;
  objdados.altura = alturad;
  document.getElementById("texto0").innerHTML = "Dentro do js o Peso..."+pesod+"   Altura...."+alturad; 
  console.log(pesod,alturad,"local ....01");

  // arraydados[length] = objdados; 
  arraydados[length] = {peso:pesod,altura:alturad};

  length++;

    console.log("03......length = ",length);
    document.getElementById("texto1").innerHTML = "Dentro da função o Peso..."+pesod+"   Altura...."+alturad;  
    console.table(arraydados);
    console.table(objdados);
    return arraydados,objdados;    

}

console.log("fora da funcao gravadados......");


