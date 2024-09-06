/* # 4 Ejercicio  Suma de pares
Escribe una función en JavaScript que tome un arreglo de números como parámetro y
devuelva la suma de todos los números pares.*/ 

/**
 * Calculates the sum of even numbers in an array.
 *
 * @param {number[]} array - The input array.
 * @returns {number} The sum of even numbers in the array.
 */
function getSumOfEvenNumbers(array) {
    const result = array.filter((number) => number % 2 === 0).reduce((acc, number) => acc + number, 0);
    
    return console.log({
        parametros: array,
        resultado: result
    });
}

// datos de prueba

getSumOfEvenNumbers([1, 2, 3, 4, 5]); // 6
getSumOfEvenNumbers([91, 20, 30, 40, 50]); // 140
getSumOfEvenNumbers([100, 2190, 320, 540, 500]); // 3460
getSumOfEvenNumbers([1000, 6000, 3000, 4000, 5000]); // 14000
getSumOfEvenNumbers([10000, 20000, 50003, 40001, 5001]); // 30000