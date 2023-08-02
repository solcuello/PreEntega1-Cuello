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

let edad = 25;

if(edad < 14){
    alert("no puedes entrar");
}else if(edad < 18){
    alert("puedes entrar connun adulto");
}else{
    alert("puedes entrar a la fiesta");
}
