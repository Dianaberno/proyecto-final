var estudiantes = [];
function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
  var resultado = "";
for(var i=0;i<estudiantes.length;i++)
  {
     resultado += "<p><strong>Nombre:</strong> " + estudiante[i].nombre1 + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante[i].nombre2 + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante[i].nombre3 + "</p>";
  }
   return resultado;
document.write(estudiantes[i].nombre1 +" "+estudiantes[i].nombre2 +" "+estudiantes[i].nombre3 +"");
var lista=agregarEstudiante();
return estudiantes;
console.log(estudiantes);


}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre,puntostec,puntoshse;
    var array=[];
    nombre=prompt("Nombre del estudiante es:",'');
    puntostec=prompt("Puntos tecnicos del estudiante es:",'');
    puntoshse=prompt("Puntos HSE del estudiante es:",'');
    nombre=nombre.toLowerCase();

    array.push(nombre);
    array.push(puntostec);
    array.push(puntoshse);

    document.write(agregar(array));
    return mostrar(agregar(array));
    function agregar(array){

      var palabra={};
      for(var i=0;i<array.length;i++){
        palabra["nombre"+(i+1)]=array[i];
      }
      estudiantes.push(palabra);

      console.log(estudiantes);
      var uno=estudiantes;

      return mostrar(estudiantes);
      return uno;
      return palabra.nombre1 + "" +palabra.nombre2 + "" +palabra.nombre3+"";
    }

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    for(var i=estudiante.length-1;i<estudiante.length;i++){
    resultado += "<p><strong>Nombre:</strong> " + estudiante[i].nombre1 + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante[i].nombre2 + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante[i].nombre3 + "</p>";
    }
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}
function mostrar1(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";

    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
 //   for(var i=0; i<2; i++)
   //   {

    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre1 + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.nombre2 + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.nombre3 + "</p>";

   //    }
       resultado += "</div>";
       resultado += "</div>";
       resultado += "</div>";
       resultado += "</div>";

    return resultado;
}
function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

 console.log(estudiantes);

         var resultado = "";
         resultado += "<div class='row'>";
         resultado += "<div class='col m12'>";
         resultado += "<div class='card blue-grey darken-1'>";
         resultado += "<div class='card-content white-text'>";
         for(var i=0; i<estudiantes.length; i++)
      {
        resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre1 + "</p>";
         resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].nombre2 + "</p>";
         resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].nombre3 + "</p>";

         //resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i]+ "</p>";

         //document.write(estudiantes[i].nombre1 +" "+estudiantes[i].nombre2 +" "+estudiantes[i].nombre3 +" ";
       }

       resultado += "</div>";
       resultado += "</div>";
       resultado += "</div>";
       resultado += "</div>";
       return resultado;

}
function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
   console.log(estudiantes);

    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    for(var i=estudiantes.length-1;i<estudiantes.length;i++){
    resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre1 + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].nombre2 + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].nombre3 + "</p>";
    }
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
  // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
  nombre=nombre.toLowerCase();
  var result="";

  for(var i=0; i<estudiantes.length;i++){
    if( nomnbre == estudiantes[i].nombre1)
  {
  result=estudiantes[i];
  result= estudiantes[i].nombre1 + "" + estudiantes[i].nombre2 + "" + estudiantes[i].nombre3;
  console.log("hi" + result);
  return result;
  document.write(estudiantes[i].nombre1 + "" + estudiantes[i].nombre2 + "" + estudiantes[i].nombre3+"");
 }
  }
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
 for(var i=0;i<=estudiantes.length;i++){
   result=estudiantes[i];
   result= estudiantes[i].nombre1 + "" + estudiantes[i].nombre2 + "" + estudiantes[i].nombre3;
    var tecnico=Math.max.apply(null,estudiantes[i].nombre2);
    console.log("hi"+ result)
    document.write(estudiantes[i].nombre1 + "" + estudiantes[i].nombre2 + "" + estudiantes[i].nombre3+"");

 }
 var result=[];
 var array2=[];
 for(var i=0;i<estudiantes.length;i++){
   array2[i]=estudiantes[i].nombre2;
   document.write(estudiantes[i].nombre1 + "" + estudiantes[i].nombre2 + "" + estudiantes[i].nombre3+"");
    }
    array2.sort();
    var z=0;
  for(var i=array2.length-1;i>=0;i--){
    if(array2===estudiantes[i].nombre2){
      result[z]=estudiantes[i];
      result= result= estudiantes[i].nombre1 + "" + estudiantes[i].nombre2 + "" + estudiantes[i].nombre3;
    }
    z++;
  }
  return result;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
 var result=[];
 var array3=[];

 for(var i=0;i<estudiantes.length;i++){
   array3[i]=estudiantes[i].numero3;
   document.write(estudiantes[i].nombre1 + "" + estudiantes[i].nombre2 + "" + estudiantes[i].nombre3+"");
    }
    estudiantes.sort(function(x,y){
      return y.nombre3-x.nombre3;
      console.log("hola"+y.nombre3-x.nombre3);
    });
    var z=0;
    for(var i=array3.length-1;i>=0;i--){
      if(array3==estudiantes[i].nombre3){
        result[z]=estudiantes[i];
        result=estudiantes[i].nombre1 +" "+estudiantes[i].nombre2 +" "+estudiantes[i].nombre3;
      }
      z++;
    }
    return result;
 }
