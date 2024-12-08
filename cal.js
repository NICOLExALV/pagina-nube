var operador;
var valor1;
var valor2;

function agregarValor(valor){
    document.getElementById("resultado").value += valor;
}

function borrar(){
    document.getElementById("resultado").value = "";
}

function operar(op){
    operador = op;
    valor1 = document.getElementById("resultado").value;
    borrar();
}

function calcular(){
    valor2 = document.getElementById("resultado").value;
    var resultado;
    switch(operador){
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2);
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2);
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2);
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2);
            break;
    }
    document.getElementById("resultado").value= resultado;
}