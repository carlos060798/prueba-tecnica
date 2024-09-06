<?php
/*
Escribe un script en PHP que tome un número como parámetro y devuelva la suma de los
números impares entre 1 y el número ingresado.   */

function sumaImpares($numero) {
    $suma = 0;
    for ($iterador = 1; $iterador <= $numero; $iterador++) {
        if ($iterador % 2 != 0) {
            $suma += $iterador;
        }
    }
    return $suma;
}

// Ejemplo de uso  de la funcion
echo sumaImpares(5); // Muestra: 9 
echo  sumaImpares(10); // Muestra: 25


?>