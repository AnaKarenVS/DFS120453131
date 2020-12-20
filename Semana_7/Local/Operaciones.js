const readline = require("readline-sync"); //importa clase de nodejs para ingreso de datos

const Operaciones = {}; //se crea una clase vacia

let a;
let b;
let unoResta;
let dosResta;
let multiplicando;
let multiplicador;
let divisor;
let dividendo;
//let option;
//choiceOperation();

function choiceOperation(){
    console.log("1 = Suma");
    console.log("2 = resta");
    console.log("3 = multiplicacion");
    console.log("4 = division");
    console.log("5 = salir");
    let option = readline.question('Que quieres hacer?: ');
    if(option == 1){
       // console.log("AQUI LLAMO A SUMA");
        suma();
    }
    if(option == 2){
        //console.log("AQUI LLAMO A RESTA");
        resta();
    }
    if(option == 3){
        //console.log("AQUI LLAMO A MULTIPLICAION");
        multiplicacion();
    }
    if(option == 4){
       // console.log("AQUI LLAMO A DIVISION");
        division();
    }
    if (option == 5){
        console.log("Saliendo...");
        return;
    }
    if (option => 6){
        console.log("Opcion no valida, elige nuevamente");
        choiceOperation();
    }
}
exports.choiceOperation = choiceOperation;

function suma(){
    a = readline.question("Dame el primer numero: ");
    b = readline.question("Dame el segundo numero: ");
    let resultado = parseFloat(a) + parseFloat(b);
    console.log("El resutado de la suma es: ", resultado);
}

//suma();
//module.exports = Operaciones; //se exporta la clase
//Operaciones.suma = suma; // la funcion suma pertece a la clase operaciones para poder exportarla

function resta(){
    unoResta = readline.question("Dame el primer numero: ");
    dosResta = readline.question("Dame el segundo numero: ");
    let resultado = parseInt(unoResta) - parseInt(dosResta);
    console.log("El resutado de la resta es: ", resultado);
}

function multiplicacion(){
    multiplicando = readline.question("Dame el primer numero: ");
    multiplicador = readline.question("Dame el segundo numero: ");
    let resultado = parseInt(multiplicando) * parseInt(multiplicador);
    console.log("El resutado de la multiplicacion es: ", resultado);
}

function division(){
    divisor = readline.question("Dame el primer numero: ");
    dividendo = readline.question("Dame el segundo numero: ");
    if(divisor == 0 || dividendo == 0){
        console.log("Eso no se puede calcular, empezamos de nuevo");
        division();
    }

    let resultado = parseFloat(divisor) / parseFloat(dividendo);
    console.log("El resutado de la division es: ", resultado);
}