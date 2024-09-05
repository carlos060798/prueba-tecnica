/* #  5-Ejercicio  Total de objetos
Escribe una función en JavaScript que tome un objeto como parámetro y devuelva la
cantidad de propiedades que tiene el objeto*/

/**
 * Calculates the total number of properties in an object.
 * 
 * @param {Object} objeto - The object to count the properties from.
 * @returns {number} The total number of properties in the object.
 */
function totalObjetos(objeto) {
    const result = Object.keys(objeto).length;

    return console.log({
        parametros: objeto,
        resultado: result
    });
}

// datos de prueba
totalObjetos({}); // 0
totalObjetos({ a: 1, b: 2 }); // 2
totalObjetos({ a: 1, b: 2, c: 3 }); // 3
totalObjetos({ a: 1, b: 2, c: 3, d: 4 }); // 4
totalObjetos({ a: 1, b: 2, c: 3, d: 4, e: 5 }); // 5
totalObjetos({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }); // 6