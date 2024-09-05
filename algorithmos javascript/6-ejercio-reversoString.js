/* # 6 Ejercicio  Reverso de una cadena
Escribe una función en JavaScript que tome una cadena de caracteres como parámetro y
devuelva la cadena con las palabras en orden inverso.
*/

/**
 * Reverses the order of words in a given string.
 * 
 * @param {string} cadena - The input string to be reversed.
 * @returns {void} - Logs an object containing the input string and the reversed string.
 */
function reversoString(cadena) {
    const result = cadena.split(' ').reverse().join(' ');
    
    return console.log({
        parametros: cadena,
        resultado: result
    });
} 

// datos de prueba
reversoString('Hola mundo'); // mundo Hola
reversoString('prueba tecnica'); // tecnica prueba
reversoString('javascript es genial'); // genial es javascript
reversoString('hola mundo cruel'); // cruel mundo hola