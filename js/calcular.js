/*Cramos la función calcular*/
function calculate() {

    /*Declaramos las variables para recibir los números 'num1' y num2*/
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    /*Usamos NaN para tratar excepción si es que el valor no es un número*/
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    /**Según la operación selecionada en el texbox hacer*/
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                alert("No se puede dividir por 0.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    document.getElementById("result").textContent = `Resultado: ${result}`;
}
