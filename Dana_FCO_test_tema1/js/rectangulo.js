console.log("--Programa del rectangulo--");
function calcularrectangulo(base , altura){
    let perimetro = (2* (base + altura).toFixed(2));
    let superficie = ((base + altura ).toFixed(2));
    return{ perimetro: perimetro, superficie:superficie}
}
let resul = calcularrectangulo(3.2, 24.4);
// console.log(resul);


