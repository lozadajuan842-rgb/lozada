

    // ==========================================
    // EJERCICIO 1 - CALCULADORA DE PROPINA
    // ==========================================

    function calculadoraPropina() {

        let cuenta = parseFloat(
            prompt("Ingresa el monto de la cuenta:")
        );

        let porcentaje = parseFloat(
            prompt("Ingresa el porcentaje de propina:")
        );

        let propina = cuenta * (porcentaje / 100);

        let total = cuenta + propina;

        document.getElementById("visorPropina").innerHTML =
            "Propina: $" + propina.toFixed(2) +
            "<br>" +
            "Total: $" + total.toFixed(2);
    }


    // ==========================================
    // EJERCICIO 2 - CLASIFICADOR DE IMC
    // ==========================================

    function calcularIMC() {

        let peso = parseFloat(
            prompt("Ingresa tu peso en kilogramos:")
        );

        let altura = parseFloat(
            prompt("Ingresa tu altura en metros:")
        );

        let imc = peso / (altura ** 2);

        let categoria;

        if (imc < 18.5) {

            categoria = "Bajo peso";

        } else if (imc < 25) {

            categoria = "Normal";

        } else if (imc < 30) {

            categoria = "Sobrepeso";

        } else {

            categoria = "Obesidad";

        }

        document.getElementById("visorIMC").innerHTML =
            "IMC: " + imc.toFixed(2) +
            "<br>" +
            "Categoría: " + categoria;
    }


    // ==========================================
    // EJERCICIO 3 - MENÚ CON SWITCH
    // ==========================================

    function mostrarMenu() {

        let opcion = parseInt(
            prompt(
                "MENÚ DE UTILIDADES\n\n" +
                "1. Celsius → Fahrenheit\n" +
                "2. Precio con IVA\n" +
                "3. Nota (0-100) → Letra\n\n" +
                "Elige una opción:"
            )
        );


        switch (opcion) {


            // ----------------------------------
            // OPCIÓN 1
            // Celsius a Fahrenheit
            // ----------------------------------

            case 1:

                let celsius = parseFloat(
                    prompt("Ingresa los grados Celsius:")
                );

                let fahrenheit =
                    celsius * 9 / 5 + 32;

                document.getElementById("visorMenu").innerHTML =
                    "Temperatura en Celsius: " +
                    celsius.toFixed(2) + " °C" +
                    "<br>" +
                    "Temperatura en Fahrenheit: " +
                    fahrenheit.toFixed(2) + " °F";

                break;


            // ----------------------------------
            // OPCIÓN 2
            // Precio con IVA
            // ----------------------------------

            case 2:

                let precio = parseFloat(
                    prompt("Ingresa el precio:")
                );

                let iva = parseFloat(
                    prompt("Ingresa el porcentaje de IVA:")
                );

                let precioFinal =
                    precio + (precio * iva / 100);

                document.getElementById("visorMenu").innerHTML =
                    "Precio original: $" +
                    precio.toFixed(2) +
                    "<br>" +
                    "IVA: " + iva.toFixed(2) + "%" +
                    "<br>" +
                    "Precio final: $" +
                    precioFinal.toFixed(2);

                break;


            // ----------------------------------
            // OPCIÓN 3
            // Nota a letra
            // ----------------------------------

            case 3:

                let nota = parseFloat(
                    prompt("Ingresa una nota entre 0 y 100:")
                );

                let letra;


                if (nota >= 90) {

                    letra = "A";

                } else if (nota >= 80) {

                    letra = "B";

                } else if (nota >= 70) {

                    letra = "C";

                } else if (nota >= 60) {

                    letra = "D";

                } else {

                    letra = "F";
                }


                document.getElementById("visorMenu").innerHTML =
                    "Nota: " + nota.toFixed(2) +
                    "<br>" +
                    "Calificación: " + letra;

                break;


            // ----------------------------------
            // OPCIÓN INCORRECTA
            // ----------------------------------

            default:

                document.getElementById("visorMenu").innerHTML =
                    "Opción no válida. Debes elegir 1, 2 o 3.";

                break;
        }
    }
