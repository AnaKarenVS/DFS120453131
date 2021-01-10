const Operaciones = {} 
function suma (numOne, numTwo){
    return numOne + numTwo;
}

module.exports= Operaciones; //se exporta todo lo que esta en el archivo operaciones
Operaciones.suma = suma; //se inicializa la funcion con la exportacion

function resta (numOne, numTwo){
    return numOne - numTwo;
}
Operaciones.resta = resta;

function multiplicacion (numOne, numTwo){
    return numOne * numTwo;
}
Operaciones.multiplicacion = multiplicacion;

function division (numOne, numTwo){
    if( numOne == 0 || numTwo==0){
        return;
    }
    else{
        return numOne / numTwo;
    }
}
Operaciones.division = division;