console.log("--Programa de la formula general--");

function discrim(a, b, c)
{
    return (b*b - 4*a*c);
} 
function solucionar(a, b, c, sol){
let disc = discrim(a,b,c);
if (disc < 0)
   alert("Sin solución real");
else
   {
   sol[0] = (-b + Math.sqrt(disc))/(2*a);
   sol[1] = (-b - Math.sqrt(disc))/(2*a);
   } 
}

let vari = discrim (8, -8, 3);
console.log(vari)
console