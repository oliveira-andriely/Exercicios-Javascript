function cifra(str, deslocamento) {
    var resultado = "";

    for (var i = 0; i < str.length; i++) {
        var char = str[i]
        var codigo = str.charCodeAt(i);

        if (codigo >= 65 && codigo <= 90) { //maiuscula
            char = String.fromCharCode(((codigo - 65 + deslocamento) % 26) + 65);
        } else if (codigo >= 97 && codigo <= 122) { // minuscula
            char = String.fromCharCode(((codigo - 97 + deslocamento) % 26) + 97);

        }
        resultado += char;
    }

    return resultado;
}



var entrada = "Cesar e um macaco";
var deslocamento = 2;

var saida = cifra(entrada, deslocamento);
console.log(saida);

/*Neste exemplo, a função cifra recebe a string a ser codificada (str)
e o número de deslocamentos no alfabeto (deslocamento). 
A função itera sobre cada caractere da string e verifica se é uma letra maiúscula ou minúscula.
Em seguida, calcula o novo código ASCII da letra deslocada e converte-o de volta para caractere 
usando String.fromCharCode(). O resultado é concatenado à variável resultado.
No exemplo de uso, a entrada é "Cesar governou Roma" e o número de deslocamentos é 3.
A função cifra é chamada com esses valores e o resultado é exibido no console: "Fhvdu jryhuqrx Urpd".*/
