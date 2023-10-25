console.log("--Programa de dinosaurio--");
function convDino(nombre, peso, longitud) {
    var pesoK = ((peso / 1000).toFixed(2));
    var longiM = ((longitud * 0.3047).toFixed(2));
     return ["el nombre es:  " + nombre +"  " + pesoK + "  " +  longiM ];
}
convDino( "lolo" , 45.5 , 34.43);

