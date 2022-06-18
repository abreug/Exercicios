
// Solução 1
function verificaPalindromo(string){
    if(!string) return; // verifca se a variavel vem como nula, vazia ou undefined, se existe, o codigo continua

    return string.split("").reverse().join("") === string;// split: se não passar nada para ele, ele separa todas as letras / reverse: reverte os caracteres do array da split, para colocar a palavra ao contrario / join: junta todas as letras do array revertido
}

// console.log(verificaPalindromo("ama"));

// Solução 2

function verificaPalindromo2(string){
    if(!string) return "string inexistente";
    if(!string.length) return;

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 -i]){
        return console.log(false);
        }
    }
    return console.log(true);
}

console.log(verificaPalindromo2('gato'));