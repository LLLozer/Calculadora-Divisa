
let valor = prompt("Introduzca 1 para pasar a convertir un valor o 2 si quiere salir");
function convertCurrency(pesos) {
    return pesos/1300;
    }
switch (valor) {
    case "1":
        let pesos = prompt("Introduzca en pesos la cantidad que quiere convertir");
        let calculo = convertCurrency(pesos);
        let elcuco = {
            tipo: "divisa",
            entrada: "1300 ARS",
            salida: "1 USD",
            fecha: new Date().toLocaleString()
        }
        prompt("El resultado es:" ,calculo.toFixed(4));
    break;
    default:
        prompt("Usted no puede hacer eso. Usted se tiene que arrepentir");
}