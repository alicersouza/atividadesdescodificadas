function inicio(){
    var mensagem = "Página carregada com sucesso!";
    alert(mensagem);

    var num1, num2;
    num1 = 10;
    num2 = 20;

    var soma = num1 + num2;
    var divisao = num1 / num2;
    var multiplicacao = num1 * num2;

    if (num1 == num2){
        console.log("Número 1 é igual ao número 2");
    } else{
        console.log("Número 1 é diferente de número 2");
    }

    console.log("A soma é: " + soma);
    console.log("A divisāo é: " + divisao);
    console.log("A multiplicacao é: " + multiplicacao);
}