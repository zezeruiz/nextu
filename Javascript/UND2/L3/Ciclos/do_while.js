var lista_nombres = ["Nomb1", "Nomb2", "Nomb3", "Nomb4", "Nomb5", "Nomb6", "Nomb7" ];

var i = 0;
var resultado = "";

do {
  resultado = resultado + lista_nombres[i] + "\n";
  i = i+1;
} while (i<7);

alert(resultado);
