let history=[];
let valor=""
while (valor !== "2") {
    valor = prompt("1) Divisa (ARS->USD)\n2) Salir");
function convertCurrency(pesos) {
    return pesos/1300;
    }
switch (valor) {
    case "1":
        let pesos = prompt("Introduzca en pesos la cantidad que quiere convertir"); 
        let calculo = convertCurrency(pesos);
        let resultado = {
            tipo: "divisa",
            entrada: `${pesos} ARS`,
            salida: `${calculo.toFixed(2)} USD`,
            fecha: new Date().toLocaleString()
        }
        history.push(resultado);
        alert(`El resultado es: ${calculo.toFixed(2)} dólares`);
    break;
    default:
        prompt("Buen viaje");
    }
console.log("Historial de conversiones:" ,history,)
}