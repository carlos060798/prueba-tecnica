<?php
/*Escribe un script en PHP que tome un arreglo de cadenas de caracteres como parámetro y
devuelva la cadena más larga del */ 


function cadenaMasLarga($arreglo) {
    $cadenaMasLarga = "";
    foreach ($arreglo as $cadena) {
        if (strlen($cadena) > strlen($cadenaMasLarga)) {
            $cadenaMasLarga = $cadena;
        }
    }
    return $cadenaMasLarga;
}

// Ejemplo de uso
echo cadenaMasLarga(["hola", "mundo", "hola mundo"]); // Muestra: hola mundo
echo cadenaMasLarga(["hola", "mundo", "hola mundo", "hola mundo cruel"]); // Muestra: hola mundo cruel



?>