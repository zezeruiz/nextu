var IVA = 0.16
var Pedido = {
  cliente: "Federico Gutierrez",
  productos: ["Manzanas", "Refrescos", "Azucar", "Sal", "Lechugas frescas"],
  precios: [500, 4000, 2500, 2000, 5000],
  cantidad: [20, 10, 3, 3, 10]
}

var resultado = 0
var premio = ""
var valorTotal = 0

// Algoritmo de calculo

for(i in Pedido.productos) {

  resultado = resultado + (Pedido.precios[i] * Pedido.cantidad[i]);
}

valorTotal = resultado + (resultado * IVA);

if (valorTotal > 100000) {
  premio = "Tiene derecho a un premio!";
} else {
  premio = "No tiene derecho a premio. Intenta comprando más la próxima ocación :D!";
}


var button = document.getElementById('calculo')
button.addEventListener('click', function(){

  alert("Estimado Sr. " + Pedido.cliente + ",\nel valor total de su pedido es: " + resultado.toFixed(2) + "(SIN IVA) y: " + valorTotal.toFixed(2) + "(CON IVA). \nDebido al valor de tu compra: " + premio);


})
