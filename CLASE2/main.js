/* estructura del if

if(condicion)
codigo a ejecturar cuando la condicion es verdadera*/

/* let edad = 16;

if(true < 18){
    console.log("No puedes entrar a la fiesta");
} */
/* 
if(false){
    console.log("entramos");
}
console.log("Finalizamos");
 */
/* estructura del if else

if(condicion){
    codigo a ejecutar en casi de que la condicion sea verdadera
}else (significa que si lo de arriba)
    {
    codigo a ejecutar en caso de que la condicion no sea verdadera }
*/
/* 
let edad = parseInt(prompt("ingrese su edad"));

if (edad < 18) {
    alert("No puedes entrar a la fiesta");
} else { 
    alert("Puedes entrar a la fiesta");
}  */

/* let respuesta = prompt("¿terminaste la tarea?");

if (respuesta === "si") {
    alert("puedes salir a jugar");
} else {
    alert("no puedes salir a jugar");
} */

/* let edad = 16;

if(edad < 14){
    console.log("no puedes entrar");
}else if(edad < 18){
    console.log("puedes entrar conn un adulto");
}else{
    console.log("puedes entrar a la fiesta");
}
 */
/* && es verdadera cuando todos los elementos son verdaderos en caso contrario es falso 
||es verdadero cuando el menos uno de los elementos es verdader en caso contrario es falso  */


/* let edad = 45;

console.log("su edad es: "+ edad);
console.log(`su edad es: ${edad}`) */

/* let nombre = prompt("ingrese nombre");
let apellido = prompt("ingrese el apellido");

if(nombre != "" && apellido !="") {
    alert(`su nombre es: ${nombre} ${apellido}`);
}else{
    alert("el nombre y el apellido se requiere");
} */

let numero = prompt("ingrese un numero");

if(numero > 1000){
    alert("el numero es mayor a 1000");
}else
if(numero < 1000){
    alert("el numero es menor a 1000");
}

