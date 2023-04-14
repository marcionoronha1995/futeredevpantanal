document.getElementById("demo").innerHTML = "Hello Dolly.";

function funcdemo2() {
    document.getElementById("demo2").innerHTML = "Hello Dolly. 2";
}


function funcdemo3() {
    document.getElementById("demo3").innerHTML = "Hello Dolly. 3";
    let CEPinformado = document.getElementById("CEPinput").value;
    console.log(CEPinformado)
    document.getElementById("demo4").innerHTML = CEPinformado;
}