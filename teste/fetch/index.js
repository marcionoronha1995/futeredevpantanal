// let file = "fetch_info.txt"
// fetch (file)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y);

// getText1("fetch_info.txt");

// async function getText1(file) {
//   let x = await fetch(file);
//   let y = await x.text();
//   document.getElementById("demo1").innerHTML = y;
// }

// getText2("fetch_info.txt"); 

// async function getText2(file) {
//     let myObject = await fetch(file);
//     let myText = await myObject.text();
//     document.getElementById("demo2").innerHTML = myText;
//   }

// const myArray = new Uint32Array(10);
// let text = "";
// crypto.getRandomValues(myArray);

// for (const num of myArray) {
//   text += num + "<br>"
// }
// document.getElementById("demo3").innerHTML = text;

// var myObj = { "name":"John", "age":31, "city":"New York" };
// var myJSON = JSON.stringify(myObj);
// console.log(myJSON);
// window.location = "demo_json.php?x=" + myJSON;

const myElement = document.getElementById("demo4");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

// async function buscaCep() {
//   const cepRequest = await fetch("https://brasilapi.com.br/api/cep/v2/89010025")
//   const meuCep = await meuCep.json()
//   }
//   buscaCep()
  
  // https://brasilapi.com.br/api/cep/v2/{cep}



  // função para tratar o sucesso

const myCEP = document.getElementById("cep4");




console.log("fora da funcao... ",cep4)

const buscacep = () => {



  function success() {
    var data = JSON.parse(this.responseText); //fazer o parsing da string para JSON
    myCEP.innerHTML = data;
    console.log("olha os dados",data.cep);
    console.log(" valor ",cep4)
    document.getElementById("resultcep1").innerHTML =(""+data.cep+""+data.city+""+data.location+""+data.neighborhood+""+data.service+""+data.state+""+data.street)
    console.log(data)
console.log(
    "",data.cep,
    "",data.city,
    "",data.location,
    "",data.neighborhood,
    "",data.service,
    "",data.state,
    "",data.street
    )
  }
  
  // função para tratar o erro
  function error(err) {
    console.log('Erro de solicitação', err); //os detalhes do erro estarão no objeto "err"
  }
  
  var xhr = new XMLHttpRequest(); //invocar uma nova instância de XMLHttpRequest
  xhr.onload = success; // chamar a função success se a solicitação for um sucesso
  xhr.onerror = error;  // chamar a função error se a solicitação der errado
  xhr.open('GET', 'https://brasilapi.com.br/api/cep/v2/88053050'); // abrir uma solicitação GET
  xhr.send(); // enviar a solicitação ao servidor.
  console.log("dados digitado",cep4);

  let x1 = document.getElementById("cep4").value;
  document.getElementById("resultcep").innerHTML = x1;
  

};
