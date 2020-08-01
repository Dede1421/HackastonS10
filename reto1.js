//Problema 1
let firstNumber = parseFloat(prompt("Porfavor ingrese el primer número"));
let SecondNumber = parseFloat(prompt("Porfavor ingrese el segundo número"));

const suma = (a, b) => {
  return a + b;
};

console.log(suma(firstNumber, SecondNumber));

//Problema 2
let numberToPower = parseFloat(
  prompt("Porfavor ingrese un número el cual desea que se potencia")
);

let power = parseFloat(prompt("Por favor ingrese la potencia"));

const potenciar = (number, power) => {
  return number ** power;
};

console.log(potenciar(numberToPower, power));

//Problema 3
const array = [1, 5, 9];

let numberToCube = array.map((numberInArray) => numberInArray ** 3);

const reducer = (accurate, value) => accurate + value;
const sumOfCubes = numberToCube.reduce(reducer);

console.log(sumOfCubes);

//Problema 4
let TriangleBase = parseFloat(prompt("Porfavor ingrese la base del triángulo"));
let TriangleHeight = parseFloat(
  prompt("Porfavor ingrese la altura del triángulo")
);

const area = (base, height) => {
  return (base * height) / 2;
};

console.log(area(TriangleBase, TriangleHeight));

//Problema 5

let number1 = parseFloat(prompt("Porfavor ingrese el primer número"));
let number2 = parseFloat(prompt("Porfavor ingrese el segundo número"));
let aritOperator = prompt("Porfavor ingrese un operador matemático");

const calculator = (number1, number2, operator) => {
  switch (operator) {
    case "+":
      console.log(number1 + number2);
      break;

    case "-":
      console.log(number1 - number2);
      break;

    case "*":
      console.log(number1 * number2);
      break;

    case "/":
      console.log(number1 / number2);
      break;

    case "%":
      console.log(number1 / number2);
      break;

    default:
      console.log("El operador no es reconocido");
  }
};

calculator(number1, number2, aritOperator);
