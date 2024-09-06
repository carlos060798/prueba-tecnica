<?php
/*
Escribe un script en PHP que muestre por pantalla la fecha actual en formato "día de la
semana, día de mes de año".*/

function fechaActual() {
    echo date("l, j F Y");
}

// Ejemplo de uso
fechaActual(); // Muestra: lunes, 15 marzo 2021

?>
