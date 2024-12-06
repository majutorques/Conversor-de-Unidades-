// Conversor de Temperatura
function converterTemperatura(valor, unidade) {
    /*
    Converte valores de temperatura entre Celsius, Fahrenheit e Kelvin.
    Parâmetros:
        - valor: o valor numérico da temperatura a ser convertido.
        - unidade: a unidade de conversão (ex.: "C-F", "F-C", "C-K", "K-C").
    Retorna:
        - O valor convertido ou uma mensagem de erro se a unidade for inválida.
    */
    if (unidade === "C-F") {
        return valor * 9 / 5 + 32;  // Celsius para Fahrenheit
    } else if (unidade === "F-C") {
        return (valor - 32) * 5 / 9;  // Fahrenheit para Celsius
    } else if (unidade === "C-K") {
        return valor + 273.15;  // Celsius para Kelvin
    } else if (unidade === "K-C") {
        return valor - 273.15;  // Kelvin para Celsius
    } else {
        return "Unidade inválida.";
    }
}
// Conversor de Distância
function converterDistancia(valor, unidade) {
    /*
    Converte valores de distância entre metros, quilômetros, milhas e jardas.
    Parâmetros:
        - valor: o valor numérico da distância a ser convertido.
        - unidade: a unidade de conversão (ex.: "M-KM", "KM-M", "M-MI", "MI-M").
    Retorna:
        - O valor convertido ou uma mensagem de erro se a unidade for inválida.
    */
    if (unidade === "M-KM") {
        return valor / 1000;  // Metros para Quilômetros
    } else if (unidade === "KM-M") {
        return valor * 1000;  // Quilômetros para Metros
    } else if (unidade === "M-MI") {
        return valor / 1609.34;  // Metros para Milhas
    } else if (unidade === "MI-M") {
        return valor * 1609.34;  // Milhas para Metros
    } else {
        return "Unidade inválida.";
    }
}
