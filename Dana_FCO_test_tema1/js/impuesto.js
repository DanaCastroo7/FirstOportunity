console.log("--Programa de impuestos--");


function impuesto(costo){
    if (costo <= 20){

        return ("sin impuesto");
    } 
    else if (costo >= 20 ){
        return (((costo * 0.30) +  costo).toFixed(2));
    } 
    else if (costo > 100 && costo < 500){
        return (((costo * 0.40) + costo).toFixed(2));
    }
    else if (costo >= 500 ){
        return (((costo * 0.50) + costo).toFixed(2));
    }
}
let cadena1 =  "el precio total es: " + impuesto(55.5) ;
// console.log (cadena1);
