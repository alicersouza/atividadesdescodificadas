function positivos() {
    ler_entrada();
}

function ler_entrada() {
    var x = document.getElementById("entrada1").value;
    var y = document.getElementById("entrada2").value;
    
    var resultado = maior(x, y);
    
    escrever_saida("saida", resultado);
}

function escrever_saida(campo, valor) {
    document.getElementById(campo).innerHTML = valor;
}

function maior(valor1, valor2) {
    if (valor1 > 0 && valor2 > 0){
        return "true";
    } else {
        return "false";
    }
}
