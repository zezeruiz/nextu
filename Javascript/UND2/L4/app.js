(function(nombre, apellido, nota1, nota2, nota3){

  var nombreCompleto = nombre + ' ' + apellido;
  alert('Se está procesando la información de ' + nombreCompleto);

  setTimeout(function(){
    var sumarNotas = nota1 + nota2 + nota3;
    var calificacion = sumarNotas/3;
    alert(nombreCompleto + ' obtuvo en programación: ' + calificacion.toFixed(2));
  }, 1000);

}) ('Jason', 'Roberts', 5, 4.2, 3.5);
