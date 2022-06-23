/* ARRAYS */

/* Formas de declarar un Array */
// const otroArray = new Array();
// const miArray = ["Mochila de Alexis", "Cartera de Maria", "Bolsa de Juan"];
// console.log(miArray[2]);
// console.log(otroArray);
////se comienza a contar desde el 0

/*   Ver la longitud del array - .length */
// const otroNuevoArray = [["Juan", 30, {}], "Alexis", 2, true, {}, () => {}];
// console.log(otroNuevoArray.length);
// console.log(otroNuevoArray);

/* Acceder a los elementos de un array */
// const miArray = ["Mochila de Alexis", "Cartera de Maria", "Bolsa de Juan"];
// const elemento = miArray[0];
// console.log(`En ese casillero esta guardada la ${miArray[0]}`);
// console.log(elemento);

/* Acceder al primer elemento y modificarlo - miArray[0] */
// const miArray = ["Mochila de Alexis", "Cartera de Maria", "Bolsa de Juan"];
// miArray[0] = "La cartera de Juliana";
// console.log(miArray[0]);

/* Acceder al ultimo elemento - miArray[miArray.length - 1] */
// const miArray = ["Mochila de Alexis", "Cartera de Maria", "Bolsa de Juan"];
// const lastElement = miArray[miArray.length - 1];
// console.log(lastElement);

/* Buscar el indice de un elemento - indexOf */
// const miArray = ["Alexis", "Martina", "Juan"];
// const elemento = "Martina";
// const index = miArray.indexOf(elemento);
// //Si no esta el elemento en el array, el valor devuelto es -1
// console.log(index);
// // devuelve el numero del indice en donde se enceuntra
// console.log(miArray[index]);
//devuelve el nombre encontrado
// miArray[miArray.indexOf("Alexis")] = "Martina";
// // Busca, identifica y cambia alexis por Martina
// console.log(miArray);

/*Agregar un elemento al final del Array - PUSH */
// const miArray = ["Mochila de Alexis", "Cartera de Maria", "Bolsa de Juan"];
// const newLength = miArray.push("Jorge");
// // Coloca jorge al final y devuelve el numero del array
// console.log(newLength);
// console.log(miArray);

/* Remover un elemento del final del array - POP */
// const miArray = ["Mochila de Alexis", "Cartera de Maria", "Bolsa de Juan"];
// const removedElement = miArray.pop();
// console.log(removedElement);
// console.log(miArray);

/*Agregar un elemento al principio del array - Unshift*/
// const miArray = ["Mochila de Alexis", "Cartera de Maria", "Bolsa de Juan"];
// const newLength = miArray.unshift("Jorge");
// console.log(newLength);
// console.log(miArray);

/*Remover un elemento del principio del array - SHIFT */
// const miArray = ["Mochila de Alexis", "Cartera de Maria", "Bolsa de Juan"];
// const removedElement = miArray.shift();
// console.log(removedElement);
// console.log(miArray);

/*Eliminar valores en un espacio que defino - SPLICE */
// const miArray = ["a", "b", "c", "d", "e"];
// console.log(miArray);
// miArray.splice(1, 2);
// console.log(miArray);

/*Muestra un array con los elementos definidos en un intervalo - SLICE */
// const miArray1 = ["a", "b", "c", "d", "e"];
// console.log(miArray1);
// miArray1.slice(2, 4);
// const newArray = miArray1.slice(2, 4);
// console.log(newArray);

/* Iterar sobre un array */
// const miArray = [
//   "Alexis",
//   "Juan",
//   "Pedro",
//   "Marcelo",
//   "Luis",
//   "Armando",
//   "Martina",
// ];

/* Iterar sobre un array con FOR (ya casi no se utiliza mas)*/
// for (let i = 0; i < miArray.length; i++) {
//   console.log(miArray[i]);
// }

/* Iterar sobre un array - forEach (igual que el for pero menos codigo)*/
// miArray.forEach((name, index) => {
//   console.log(miArray[index]);
//   console.log(name);
// });

/*agregar una palabra antes de cada celda del Array - MAP */

////Sin map
// const newArray = [];
// miArray.forEach((name) => {
//   const newString = `Nombre: ${name}`;
//   console.log(newString);
//   newArray.push(newString);
// });
// console.log(newArray);

// //Con map
// const newArrayWithMap = miArray.map((name) => `Nombre: ${name}`);
// console.log(newArrayWithMap);

/* filtrar por un parametro - FILTER */
////lo que hace es correr miArray y ejecuta una funcion por cada uno de los eventos, si devuelve true lo guarda en un nuevo array y si es falce no lo guarda.
// const namesArray = [
//   "Alexis",
//   "Juan",
//   "Armando",
//   "Pedro",
//   "Marcelo",
//   "Luis",
//   "Armando",
//   "Alexis",
//   "Martina",
//   "Armando",
//   "Alexis",
// ];
// const filteredArray = namesArray.filter((name) => name === "Nicolas");
// console.log(filteredArray);

/* Devuelve el primer valor que cumple la condicion - FIND */
// const existingElement = namesArray.find(
//   (name) => name.toLowerCase() === "martina"
// );
// console.log(existingElement);

// if (existingElement) {
//   console.log("El nombre esta en la lista");
// } else {
//   console.log("El nombre no esta en la lista");
// }

/* Ordena segun un criterio - SORT*/
// const miArray = [
//   "Alexis",
//   "Juan",
//   "Pedro",
//   "Marcelo",
//   "Luis",
//   "Armando",
//   "Martina",
// ];
// const orderedArray1 = miArray.sort();
// console.log(orderedArray1.reverse());

// const numbers = [10, 20, 30, 40];
// const orderedArray = numbers.sort((a, b) => {});
// console.log(orderedArray.reverse());

/*Suma de los valores - REDUCE*/
// const numbers = [10, 20, 30, 40];

//Sin reduce
// let total = 0;
// numbers.forEach((number) => (total += number));

//Con reduce
////valor actual va a ser el valor de cada una de las iteraciones
////el acumulador va a ser el valor que se va a ir almacenando en cada iteración
////la x es el valor inicial que le doy al acumulador
// const total = numbers.reduce((acumulador, valorActual) => {
//   console.log("Acumulador", acumulador);
//   console.log("Valor Actual", valorActual);
//   console.log("Aca termina la iteracion");
//   return acumulador + valorActual;
// }, 0);
// const total = numbers.reduce(
//   (acumulador, valorActual) => acumulador + valorActual,
//   0
// );
// console.log(total);

//EJERCICIOS
/* Dada la siguiente lista de invitados en ese orden:
Lucas,
Matias,
Jose,
Pedro,
Martina, 
Marcelo, 
Esteban, 
Marcela, 
Martin

 1) Informar por consola el numero de invitados */
// const list = [
//   "Lucas",
//   "Matias",
//   "Jose",
//   "Pedro",
//   "Martina",
//   "Marcelo",
//   "Esteban",
//   "Marcela",
//   "Martin",
// ];

// console.log(`La cantidad de invitados es de ${list.length}`);

/*2) Imprimir por consola el nombre del ultimo invitado*/
// console.log(
//   `El ultimo invitado de la fiesta es ${list[list.length - 1]}`
// );

/*3) A ultimo momento, se invito a Pedro a la fiesta, por lo que hay que agregarlo al final de la lista. */
// list.push("Pedro");

// console.log(list);

/*4) Media hora antes de empezar Marcela confirmo que no podia asistir. Generar una nueva lista que contenga los invitados que confirmaron su presencia. */
// const newList = list.filter((firstName) => firstName !== "Marcela");
// console.log(newList);

/*4) Por cada invitado, asignarle un numero de orden conforme su posicion en la lista. Mostrar este numero de orden en un nuevo array de la siguiente manera: "Juan. Orden: 1". */
// const listWithOrderNumber = newList.map(
//   (firstName, index) => `${firstName}. Orden: ${index + 1}`
// );
// console.log(listWithOrderNumber);

/*5) Suponiendo que los invitados consumieron la siguente cantidad de platos
      Lucas: 3 platos
      Esteban: 1 platos
      Jose: 1 plato
      Los restantes: 4 platos
  Calular el numero total de platos consumidos al final de la fiesta */
// const totalDishes = newList.reduce((acummulator, currentValue) => {
//   if (currentValue === "Lucas") {
//     return acummulator + 3;
//   } else if (currentValue === "Esteban" || currentValue === "Jose") {
//     return acummulator + 1;
//   } else {
//     return acummulator + 4;
//   }
// }, 0);
// console.log(totalDishes);

/* 6) Acomodar los invitados por orden alfabetico. */
// const orderedNames = newList.sort();
// console.log(orderedNames);
