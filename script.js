
//Tarea Clase 10
let nombre= 'Thiago';
let apellido= 'Rocha';

console.log(nombre+' '+apellido)

// let numerouno= 7;
// let numerodos= 13;
// let resultadosuma= numerouno + numerodos;

// console.log("Resultado:", resultadosuma);

// let numerotres= 20;
// let resultadototal= resultadosuma + numerotres;

// console.log("Total:", resultadototal);


// let numberone= 120;
// let nunmbertwo= 20;
// let resultsuma= numberone + nunmbertwo;
// let resultresta= numberone - nunmbertwo;
// let resultmulti= numberone * nunmbertwo;
// let resultdivision= numberone / nunmbertwo;

// console.log("Suma:", resultsuma);
// console.log("Resta:", resultresta);
// console.log("Multiplicación:", resultmulti);
// console.log("División:", resultdivision);

//EJEMPLO CLASE 11
// let nota=6;
// if (nota < 4) {
//     console.log("Aplazado");
// } else if (nota < 7) {
//     console.log("Desaprobado");
// } else if (nota < 10) {
//     console.log("Aprobado");
// } else {
//     console.log("Sobresaliente");
// }

// let nombres= ["Diego", "Anabel", "Esteban"];
// console.log(nombres);
// console.log(nombres[0]);
// console.log(nombres[2]);
// console.log("Cantidad de nombres:", nombres.length);
// for(let i=0; i<nombres.length; i++){
//     console.log(nombres[i]);
// }

//TAREA CLASE 11: Ejemplo IF
let topping="Oreo";
let precio=0;
let precioTotal=0;
let helado= 50;

if (topping == "Oreo") {
    precio= 10;
} else if (topping == "KitKat") {
    precio= 15;
} else if (topping == "Kinder") {
    precio= 25;
} else {
    precio=0;
    console.log("No tenemos este topping");
}

precioTotal= precio + helado;
console.log ("El helado cuesta $", precioTotal);

//Tarea 11: Ejemplo SWITCH
let menu= "Pescado";
switch (menu) {
    case "Carne":
    console.log("Vino tinto");
    break;
    case "Pescado":
    console.log("Vino blanco");
    break;
    case "Verdura":
    console.log("Agua");
    break;
    default:
    console.log("Elija carne, pescado o verdura");
}

//Tarea 11: Ejemplo FOR
let deportes= ["Futbol", "Basquet", "Tenis", "Padel"];
deportes.push("Boxeo");
for(let a=0; a<deportes.length; a++ ){
    console.log(deportes[a]);
}

//TAREA CLASE 12
let nom = prompt ("Ingrese su nombre")
function Saludo() {
    if (nom) {
        alert ("Bienvenido"+" "+ nom)
    }
    else {
        alert (" Debe ingresar un nombre");
}
}
Saludo();


