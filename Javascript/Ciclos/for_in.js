var lista_nombres = ["Nomb1", "Nomb2", "Nomb3", "Nomb4", "Nomb5", "Nomb6", "Nomb7" ];

var resultado = "";

for(nombre_temp in lista_nombres) {
  resultado = resultado + lista_nombres[nombre_temp] + "\n";
};

alert(resultado);
