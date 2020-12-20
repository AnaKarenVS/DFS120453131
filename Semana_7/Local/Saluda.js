const readline = require("readline-sync"); //clase de nodejs se instala paquete que nos permite ingresar datos
//pedirNombre();

function pedirNombre(){
    let  nombre = readline.question('Escribe tu nombre: ');
    console.log("Hola", nombre);
}

exports.pedirNombre = pedirNombre; //exporta la funcion a otro arhivo para ser utilizado alli
