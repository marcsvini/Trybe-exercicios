

const currentHour = 15.55;
let message = "";


if(currentHour >= 22) {
message = "não deveriamos comer nada, é hora de dormir"
}

else if (currentHour >= 18 && currentHour < 22) {
    message = "rango da noite,vamos jantar";
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "vamos fazer um bolo pro café da tarde?";
}

else if (currentHour >= 11 && currentHour < 14) {
    message = "hora do almoço";
}
else if (currentHour >= 4 && currentHour < 11) {
    message = "hmmmm, cheiro de café";

}


console.log(message);

const c = 50;
const d = 40;

console.log(c + d);
console.log(c - d);
console.log(c * d);
console.log(c / d);
console.log(c % d);


const a = 5
const b = 2

if (a > b) {
    console.log("'a' é maior que 'b'");
}
else {
    console.log("'b' é maios que 'a'");
}

const num1 = 20;
const num2 = 30;
const num3 = 50;

if (num1 > num2 && num1 > num3) {
    console.log("num1 é o maior");
}
else if (num2 > num1 && num2 > num3) {
    console.log("num2 é o maior");
}
else  {
    console.log("num3 é o maior");
};

const trianguloA = 65
const trianguloB = 100
const trianguloC = 15

let somaDosTriangulos = trianguloA + trianguloB + trianguloC;

let todosOsAngulos = trianguloA > 0 && trianguloB > 0 && trianguloC > 0;
if (todosOsAngulos){
    if (somaDosTriangulos === 180) {
        console.log(true);        
    } else {
        console.log(false);
    };
} else {
    console.log('erro: angulo invalido');
}