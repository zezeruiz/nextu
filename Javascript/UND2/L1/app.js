/* Operadores lógicos
var respuesta = "";
respuesta = respuesta + "(6>5) && (5!=6): "+ ((6>5) && (5!=6)) + "\n";
respuesta = respuesta + "(3<8) || (8==7): "+ ((3<8) || (8==7)) + "\n";
respuesta = respuesta + "!(4>5): "+ (!(4>5)) + "\n";

var numero = 6;
numero++;
respuesta = respuesta + "numero: " + (numero) + "\n";

var numero2 = --numero;
respuesta = respuesta + ("numero2= " + numero2) + "\n";
respuesta = respuesta + ("numero= " + numero) + "\n";

var numero3 = numero--;
respuesta = respuesta + ("numero3= " +numero3) + "\n";
respuesta = respuesta + ("numero= " +numero) + "\n";

alert(respuesta);

*/

/*Procesos secuenciales
function areaTriangulo() {
	var a=0, b=0, c=0;
	b= prompt("Ingrese la base (b) del triangulo.");
	h= prompt("Ingrese la altura (h) del triangulo.");
	a= (b*h)/2;
	alert("El área del triángulo es de: "+a);

}

areaTriangulo();z
*/
/* Condicionales

var a= 0, b=0, r= 0;
a = prompt("Ingrese el valor de a: ");
b= prompt("Ingrese el valor de b: ");

if (a>b) {

	r= a*b;

} else {

	r= a/b;
}

alert("El valor de r es: " + r);
*/
