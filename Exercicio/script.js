function exercicio(){

let num1 = Number(prompt('Insira o 1º numero'));
let num2 = Number(prompt('Insina o 2º numero'));
let resultado;

if (num1 === num2){
    alert('Erro - numeros iguais');
    exercicio();
} else { 
    resultado = num1 + num2;
}
alert(resultado > 10 && resultado < 20 ? [`Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultado}, que é maior que 10 e menor que 20.`] : ['Soma menor que 10 ou maior que 20']);
}

exercicio();