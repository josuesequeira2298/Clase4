function AreaCuadrado(num1) {
    document.getElementById("1").innerHTML = parseInt(num1) * parseInt(num1);
}

function Rectangulo(num1, num2) {

    document.getElementById("2").innerHTML = parseInt(num1) * parseInt(num2);
}
function triangulo(num1, num2) {
    document.getElementById("3").innerHTML = parseInt(num1) * parseInt(num2) / 2;
}
function rombo(num1, num2) {
    document.getElementById("4").innerHTML = parseInt(num1) * parseInt(num2) / 2;
}
function Paralelograma(num1, num2) {
    document.getElementById("5").innerHTML = parseInt(num1) * parseInt(num2);
}
function Circulo(num1) {
    document.getElementById("6").innerHTML = (parseInt(num1) * 3.14) * num1;
}