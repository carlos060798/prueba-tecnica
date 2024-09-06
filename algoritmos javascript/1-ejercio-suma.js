// ejercio suma
/*Escribe una función en JavaScript que tome dos números como parámetros y devuelva la
suma de ambos */

/**
 * Calculates the sum of two numbers.
 *
 * @param {number} number - The first number.
 * @param {number}  number2- The second number.
 * @returns {number} The sum of the two numbers.
 */


function sumaNumeros(number, number2) {
    const suma = number + number2;
    return  console.log({
        parametros: [number, number2],
        resultado: suma
    });
}

// datos de prueba
sumaNumeros(2, 3); // 5
sumaNumeros(5, 10); // 15
sumaNumeros(10, 20); // 30