document.addEventListener("DOMContentLoaded", function() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var documentoForm = document.getElementById('documentoForm');
    var resultadoElement = document.getElementById('resultado');

    // var resultadoElement = document.getElementById('resultado');
    // document.getElementById('calcularDNI').addEventListener('click', function() {
        // var letra1 = prompt("Introduce la letra inicial de su documento");
        // var numero = prompt("Introduce tu número de documento (sin la letra)");
        // var letra = prompt("Introduce la letra de tu final de tu documento (en mayúsculas)");
        // letra = letra.toUpperCase();
        documentoForm.addEventListener('submit', function(event) {
            event.preventDefault();
    
            var letra1 = document.getElementById('letra1').value;
            var numero = document.getElementById('numero').value;
            var letra = document.getElementById('letra').value;
    


        if (numero < 0 || numero > 99999999) {
            alert("El número proporcionado no es válido");
            //resultadoElement.className = "red";
        } else {
            if (letra1 === 'Y') {
                numero = parseInt(numero, 10) + 10000000;
            } else if (letra1 === 'Z') {
                numero = parseInt(numero, 10) + 20000000;
            }

            var letraCalculada = letras[numero % 23];
            if (letraCalculada != letra) {
                resultadoElement.textContent = "La letra o el número proporcionados no son correctos";
                resultadoElement.className = "red";
            } else {
                resultadoElement.textContent = "El número de DNI y su letra son correctos";
                resultadoElement.className = "green";
            }
        }
    });
});
