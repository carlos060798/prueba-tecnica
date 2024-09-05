/* # Ejercicio  Número de mayor
 Escribe una función en JavaScript que tome un arreglo de números como parámetro y
devuelva el número más grande del arreglo.*/ 

/**
 * Calculates the largest number in an array.
 * 
 * @param {number[]} array - The array of numbers.
 * @returns {void} - Logs the input array and the largest number.
 */
function numeroMayor(array) {
     const result = Math.max(...array);
    
    return console.log({
        parametros: array,
        resultado: result
    });
}

// datos de prueba
numeroMayor([1, 2, 3, 4, 5]); // 5
numeroMayor([91, 20, 30, 40, 50]); // 91
numeroMayor([100, 2190, 320, 540, 500]); // 2190
numeroMayor([1000, 6000, 3000, 4000, 5000]); // 5000
numeroMayor([10000, 20000, 50003, 40001, 5001]); // 50000