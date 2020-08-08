//Ejercicio 1
const person = (name, lastName, age) => {
  return `Hola mi nombres es ${name} ${lastName} y mi edad es ${age} años`;
};

console.log(person("André", "Mauricio", 29));

//Ejercicio 2
const sumeOfCubes = (...collNumber) =>
  collNumber.map((number) => number ** 3).reduce((acc, val) => acc + val);

console.log(sumeOfCubes(1, 5, 9));

//Ejercicio 3
const arrayMix = (arrayM) => arrayM.map((arrayElement) => typeof arrayElement);

console.log(arrayMix([1, 2, 3, "Hola"]));

//Ejercicio 4
const rest = (...numeros) => {
  return numeros.reduce((acc, val) => acc + val);
};

console.log(rest(1, 20, 3));

//Ejercicio 5
const arrayNumbersOnly = (array) =>
  array.filter((value) => {
    if (typeof value !== "string") {
      return value;
    }
  });

console.log(arrayNumbersOnly(["Dede", 20, "Daniel", 30, true]));

//Ejercicio 6
const minMax = (arrayNumber) => {
  return [Math.min(...arrayNumber), Math.max(...arrayNumber)];
};

console.log(minMax([1, 2, 3, 4, 5]));

//Ejercicio 7
const formatPhoneNumber = (x) => {
  return `(${x[0]}${x[1]}${x[2]}) ${x[3]}${x[4]}${x[5]}-${x[6]}${x[7]}${x[8]}${x[9]}`;
};

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//Ejercicio 8
const findLargestNumbs = (matrix) => matrix.map((row) => Math.max(...row));

console.log(
  findLargestNumbs([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
);

//Ejercicio 9
const charIndex = (word, char) => {
  return [word.indexOf(char), word.lastIndexOf(char)];
};

console.log(charIndex("Hello", "l"));

//Ejercicio 10
const conversorToArray = (object) => {
  return Object.entries(object);
};

console.log(conversorToArray({ a: 1, b: 2 }));

//Ejercicio 11
let GetSumOfBudgets = (people) =>
  people.map((person) => person.budget).reduce((acc, val) => acc + val);

console.log(
  GetSumOfBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);

//Ejercicio 12
const getNames = (array) => array.map((student) => student.name);

console.log(getNames([{ name: "Steve" }, { name: "Mike" }, { name: "Jhon" }]));

//Ejercicio 13
const getDataPost = (objectPost) => {
  return Object.entries(objectPost);
};

console.log(getDataPost({ likes: 2, dislikes: 3, followers: 10 }));

//Ejercicio 14
const squaresSum = (n) =>
  [...Array(n + 1).keys()]
    .map((elementArray) => elementArray ** 2)
    .reduce((acc, val) => acc + val);

console.log(squaresSum(3));

//Ejercicio 15
const multiplyByLength = (arreglo) =>
  arreglo.map((element) => {
    return element * arreglo.length;
  });

console.log(multiplyByLength([2, 3, 1, 0]));

//Ejercicio 16
const countDown = (number) => {
  return [...Array(number + 1).keys()].reverse();
};

console.log(countDown(5));

//Ejercicio 17
const diffMaxMin = (matrizx) => {
  return Math.max(...matrizx) - Math.min(...matrizx);
};

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

//Ejercicio 18
const filterList = (array) =>
  array.filter((elementArray) => {
    if (typeof elementArray == "number") {
      return elementArray;
    }
  });

console.log(filterList([1, 2, 3, "x", "y", 10]));

//Ejercicio 19
const repeat = (elemento1, tiempo) => {
  return Array(tiempo).fill(elemento1);
};

console.log(repeat(13, 5));

//Ejercicio 20
const vReplace = (word) => {
  return word.replace(/[aeiou]/gi, "u");
};

console.log(vReplace("apples and bananas"));

//Ejercicio 21
const findNemo = (word) => {
  return `I found Nemo at ${word.search("Nemo")}`;
};

console.log(findNemo("I am finding Nemo !"));

//Ejercicio 22
const wordIndex = (word) => {
  return word.slice(0, word.length - 1) + word[word.length - 1].toUpperCase();
};

console.log(wordIndex("Hello"));
