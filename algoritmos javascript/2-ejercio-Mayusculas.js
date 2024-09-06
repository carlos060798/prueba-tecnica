/*# Ejercicio 2
Escribe una función en JavaScript que tome una cadena de caracteres como parámetro y
devuelva la cadena en mayúsculas.*/


/**
 * Converts a string to uppercase.
 * 
 * @param {string} cadena - The string to be converted.
 * @returns {undefined} - This function does not return a value.
 */
function mayusculas(cadena) {
    const result = cadena.toUpperCase();
    
    return console.log({
        parametros: cadena,
        resultado: result
    });
}

// datos de prueba
mayusculas('hola'); // HOLA
mayusculas('prueba'); // PRUEBA
mayusculas('tecnica'); // TECNICA
mayusculas('javascript'); // JAVASCRIPT