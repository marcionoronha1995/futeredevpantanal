
function gravardados(){

    function funcaogravar(Peso, Altura) {
        this.Peso = Peso;
        this.Altura = Altura;
        
      };

    console.log("0001")
    Peso = document.getElementById('Peso').value;
    Altura = document.getElementById('Altura').value; 

    const indicetabela = new funcaogravar(Peso,Altura);

    console.table(indicetabela);


    document.getElementById("texto1").innerHTML = "Peso..."+Peso+"   Altura...."+Altura;  
    

}



