//Problema 1

function sumaDeNumeros() {
  let firstNumber = parseFloat(
    prompt("Porfavor ingrese el primer número que desea sumar")
  );
  let secondNumber = parseFloat(
    prompt("Porfavor ingrese el segundo número que desea sumar")
  );

  const suma = (a, b) => {
    return a + b;
  };
  console.log(suma(firstNumber, secondNumber));
}

sumaDeNumeros();

//Problema 2

function potenciaDeNumeros() {
  let numberToPower = parseFloat(
    prompt("Porfavor ingrese un número el cual desea que se potencia")
  );
  let power = parseFloat(prompt("Por favor ingrese la potencia"));

  const potenciar = (number, power) => {
    return number ** power;
  };
  console.log(potenciar(numberToPower, power));
}

potenciaDeNumeros();

//Problema 3

function sumaDeCubos() {
  const array = [1, 5, 9];

  let numberToCube = array.map((numberInArray) => numberInArray ** 3);
  const reducer = (accurate, value) => accurate + value;
  const sumOfCubes = numberToCube.reduce(reducer);
  console.log(sumOfCubes);
}

sumaDeCubos();

//Problema 4

function areaTriangulo() {
  let triangleBase = parseFloat(
    prompt("Porfavor ingrese la base del triángulo")
  );
  let triangleHeight = parseFloat(
    prompt("Porfavor ingrese la altura del triángulo")
  );

  const area = (base, height) => {
    return (base * height) / 2;
  };
  console.log(area(triangleBase, triangleHeight));
}

areaTriangulo();

//Problema 5

function operacionesAritmeticas() {
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
}

operacionesAritmeticas();
