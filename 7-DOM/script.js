/* DOM (Document Object Model) */
/* Live DOM Viewer => https://software.hixie.ch/utilities/js/live-dom-viewer/# */

// //Acceder a un nodo
/* 1) Por el tag name */
// const header = document.getElementsByTagName("header");
// console.log(header);

/* 2) Por el nombre de la clase */
// const container = document.getElementsByClassName("container");
// console.log(container);

/* 3) por ID */
// const avatar = document.getElementById("avatar");
// console.log(avatar);

/* 4) QuerySelector */
//// - nos permite acceder por los tres metodos anteriores - nos devuelve el primero que encuentra
//// para diferencia Tag,clase,Id es como esta escrita la sintaxis ("",.,#) - notacion del ccs
// const main = document.querySelector("main");
// console.log(main);
// const username = document.querySelector(".username");
// console.log(username);
// const repos = document.querySelector("#repos");
// console.log(repos);

/* 5) querySelectorAll */
////similar al anterior pero nos devuelve todos los que encuentra
// const username = document.querySelectorAll(".username");
// console.log(username);

/* Acceder y modificar texto - textContent o innerText */
const username = document.querySelector(".username");
username.innerText = "Vico";
username.textContent = "Vico";
//ambos son validos

// /* Acceder y modificar src de imagen */
const avatar = document.querySelector("#avatar");
avatar.src = "https://i.pravatar.cc/300";
console.log(avatar);

/* Incorporar contenido al HTML mediante JS */
// const list = document.querySelector("#repos-list");
// list.innerHTML = `
// <li> Un Repo </li>
// <li> Otro <strong>Repo</strong> </li>
// `;
// console.log(list.outerHTML);
// console.log(list.innerHTML);

/* Modificar estilos */
/* className */
//Coloca un fondo negro suscribiendo el anterior.
//const container = document.querySelector(".container");
// container.className = "background-black";
// console.log(container.className);

/* classList */
// //Coloca un fondo negro sin suscribir al anterior.
// //Nos devuelve un DOM token list (es parecido a un array)
// container.classList.add("background-black");
// console.log(container.classList);

// container.classList.remove("background-black");
//// elimina el fondo negro anterior.

// const switchTheme = () => {
//   const textNodes = document.querySelectorAll(".text");
//   const container = document.querySelector(".container");
//   const avatar = document.querySelector("#avatar");

//   container.classList.toggle("background-black");
//   textNodes.forEach((element) => element.classList.toggle("white-text"));
//   if (container.classList.contains("background-black")) {
//     avatar.style.border = "2px solid white";
//   }
// };
// switchTheme();
// switchTheme();

/* Eliminar un nodo - remove() */
// const repos = document.querySelector("#repos");
// repos.remove();

/* Crear Nodo - document.createElement */
// const reposNode = document.createElement("h2");
// reposNode.textContent = "Repos";
// reposNode.classList.add("text", "white-text");
// console.log(reposNode);
// // figura en la interfas pero no se gravo en el codigo HTML para grabarlo usamos appendchild

/* appendChild */
// const parentAside = document.querySelector("aside");
// parentAside.appendChild(reposNode);
// //esto permite que se agregue al codigo, lo agrega al final de todos los nodos. Si queremos agregarlo antes tenemos que utilizar before.

/* before y after */
// const reposList = document.querySelector("#repos-list");
// reposList.before(reposNode);
// reposList.after(reposNode);
// switchTheme();
// switchTheme();

/* Link de propiedades y metodos de elementos => https://developer.mozilla.org/es/docs/Web/API/Element
 link de propieades y metodos document => https://developer.mozilla.org/es/docs/Web/API/Document */

/*EJERCICIO*/
/*Utilizando el listado de repositorios que nos da la API de GITHUB (https://api.github.com)
tomar el primer repositorio del listado y realizar las siguientes tareas:
1) Modificar el texto 'Nombre' por el nombre de usuario
2) Agregar el avatar del usuario
3) Insertar un listado de links a sus 5 primeros
repositorios.*/

// const baseUrl = "https://api.github.com";
// const getPublicRepositories = async () => {
//   const response = await fetch(`${baseUrl}/repositories`);
//   const jsonResponse = await response.json();
//   return jsonResponse[0];
// };

// const getRepositoriesFromOwner = async (reposEndpoint) => {
//   const reposResponse = await fetch(reposEndpoint);
//   const jsonReposResponse = await reposResponse.json();
//   const responseRepos = jsonReposResponse.slice(0, 5);
//   return responseRepos;
// };

// const editProfile = async () => {
//   const profileData = await getPublicRepositories();
//   const avatarUrl = profileData.owner.avatar_url;
//   const name = profileData.owner.login;
//   const userRepos = await getRepositoriesFromOwner(profileData.owner.repos_url);

//   const userAvatar = document.querySelector("#avatar");
//   const nameNode = document.querySelector("h1");

//   nameNode.textContent = name;
//   userAvatar.src = avatarUrl;

//   userRepos.forEach((repo) => {
//     const repoNode = document.createElement("a");
//     const listNode = document.querySelector("#repos-list");
//     repoNode.textContent = repo.html_url;
//     repoNode.href = repo.html_url;

//     listNode.appendChild(repoNode);
//   });

//   console.log(userRepos);
// };

// editProfile();
