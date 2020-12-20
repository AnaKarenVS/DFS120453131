const nombre = require('./Saluda'); // se importa la funcion
//const math = require('./Operaciones'); //se importa la funcion

nombre.pedirNombre(); //se llama la funcion que pertenece a ese "import"
//math.suma();

const llamar = require('./Operaciones');
llamar.choiceOperation();

