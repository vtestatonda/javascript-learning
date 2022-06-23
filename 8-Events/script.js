//Al cliquear que aparezca un texto - queryselector.
// const logo = document.querySelector(".puzzle-logo");
// const sayHello = () => {
//   alert("Hola Mundo");
//   logo.removeEventListener("click", sayHello);
//   //Estamos ejecutando el evento fuera de la funcion y luego eliminandolo para que cuando clic leemos otra vez no se vuelva a ejecutar.
// };
// logo.onclick = () => sayHello();

/*otra manera de llamar - addEventListener */
// const logo = document.querySelector(".puzzle-logo");
// const sayHello = () => {
//   alert("Hola Mundo");
//   logo.removeEventListener("click", sayHello);
// };
// logo.addEventListener("click", sayHello);

/* Grafico de colores */
const paletteColors = {
  red: "rojo",
  black: "negro",
  white: "blanco",
  yellow: "amarillo",
  green: "verde",
  brown: "marron",
  purple: "violeta",
  peru: "peru",
};

let selectedColor;
const selectColor = (event) => {
  selectedColor = event.target.id;
  const strongTag = document.querySelector("#selected-color");
  strongTag.textContent = paletteColors[selectedColor];
};

const paintSquare = (event) => {
  if (!selectedColor) return;

  const selectedSquare = document.querySelector(`#${event.target.id}`);
  selectedSquare.className = `painterBlock ${selectedColor}`;
};

const paintSquareOnMove = (event) => {
  if (event.buttons !== 1) return;
  paintSquare(event);
};

const resetGrid = () => {
  gridSquares.forEach((square) => (square.className = "painterBlock"));
  selectedColor = null;
  const strongTag = document.querySelector("#selected-color");
  strongTag.textContent = "";
};

const colorSquares = document.querySelectorAll(".color");

colorSquares.forEach((square) => square.addEventListener("click", selectColor));

const gridSquares = document.querySelectorAll(".painterBlock");

gridSquares.forEach((square) => square.addEventListener("click", paintSquare));

gridSquares.forEach((square) =>
  square.addEventListener("mousemove", paintSquareOnMove)
);

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", resetGrid);
