//Pedir a usuario que ingrese una frase y guardar en variable "phrase"
var phrase = prompt("Escribe una frase que quieras cifrar");
//Corroborar que "phrase" no sea un espacio vacio o numeros, si es así mandar alert que ingrese una frase valida

if(phrase ==="")  					                  {
	    alert("Frase invalida");
}

//Obtener los ASCII codes de cada caracter de la frase por medio del método charCodeAt() respetando los espacios de la frase

var asciiCodes = [];
for(var i = 0; i < phrase.length; i++)   {
var result = phrase.charCodeAt(i);
asciiCodes.push(result);
}
console.log(asciiCodes);
/*Checar si los ASCII codes estan dentro del rango de las letras minúsculas o mayúsculas por medio de un IF
Calcular los nuevos indices cifrados de acuerdo a la formula de cifrado de César, utilizando los codigos ASCII
Cambiar la formula de cifrado de Cesar dependiendo el rango de letras (mayúsculas o minúsculas)
*/
var cipheredCodesAll= {};
for(var j= 0; j < asciiCodes.length; j++) {
	if( asciiCodes[j] > 64 && asciiCodes[j] < 92) {        //mayusculas
	  	var cipheredCodes = ((asciiCodes[j] - 65 + 33) % 26 + 65);
	    cipheredCodesAll.push(cipheredCodes);

	}else if(asciiCodes[j] > 96 && asciiCodes[j] < 124) {  //minusculas
		cipheredCodes = ((asciiCodes[j] - 97 + 33) % 26 + 97);
	 	cipheredCodesAll.push("cipheredCodes");
	}
}
console.log(cipheredCodesAll);
//Guardar los nuevos indices cifrados en variable "cipheredCodesAll"
//Crear funcion llamada "cipher" para transformar nuevos indices en caracteres cifrados con el método String.fromCharCode()

/*
var newPhrase = "";

for ( var k = 0; k < cipheredCodesAll.length; k++) {
		var cipheredCharacter = String.fromCharCode[k];
		console.log(cipheredCharacter);
	}
	*/