var lista_nombres = ["Nomb1", "Nomb2", "Nomb3", "Nomb4", "Nomb5", "Nomb6", "Nomb7" ];

var resultado = "";

for(var i = 0; i < 7; i++) {
  if ((i % 2) == 0) {
    continue;
  }
  resultado = resultado + lista_nombres[i] + "\n";
}

alert(resultado);
