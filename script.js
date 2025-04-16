//Números:
//Escribe una función que tome dos números como argumentos y devuelva su suma.

function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 3));

//2. Escribe una función que tome dos números como argumentos y devuelva su resta.

function dif(num1, num2) {
    return num1 - num2;
}
console.log(dif(6, 3));

//3. Escribe una función que tome dos números como argumentos y devuelva su producto.

function multiple(num1, num2) {
    return num1 * num2;
}
console.log(multiple(6, 3));

//4. Escribe una función que tome dos números como argumentos y devuelva su división.

function division(num1, num2) {
    return num1 / num2;
}
console.log(division(6, 3));

//5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el 

function power(base, exponent) {
    return base ** exponent;
}
console.log(power(6, 3));

// Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.

function getRemainder(num1, num2) {
    return num1 % num2;
}
console.log(getRemainder(10, 3));

//7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.

function getSquareRoot(number) {
    return Math.sqrt(number);
}
console.log(getSquareRoot(25));

//8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.

function getAbsoluteValue(number) {
    return Math.abs(number);
}
console.log(getAbsoluteValue(-10));

//9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.

function roundNumber(number) {
    return Math.round(number);
}
console.log(roundNumber(4.6));

//10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
function generateRandomNumber() {
    return Math.random();
}
console.log(generateRandomNumber());


//Letras:

//1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

function concatenateStrings(str1, str2) {
    return str1 + str2;
}

//2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

function getLength(str) {
    return str.length;
}

//3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function convertToUppercase(str) {
    return str.toUpperCase();
}

//4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

function convertToLowercase(str) {
    return str.toLowerCase();
}

// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.

function getCharAtPosition(str, index) {
    return str.charAt(index);
}

//6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

function invertString(str) {
    return str.split('').reverse().join('');
}

//7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

function countCharacters(str, char) {
    return str.split(char).length - 1;
}

//8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

//9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

function isPalindrome(str) {
    const result = str.replace(/\s+/g, '').toLowerCase();
    return result === result.split('').reverse().join('');
}


//10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

function capitalizeFirstLetter(str) {
    return str.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}



// Arrays:

//1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.

function sumArray(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));

//2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

function averageArray(arr) {
    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum / arr.length;
}
console.log(averageArray([1, 2, 3, 4, 5]));

//3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

function sortArrayAsc(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArrayAsc([5, 2, 8, 1, 3]));

//4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

function filterGreaterThan(array, number) {
    return array.filter(element => element > number);
}

const numbers = [1, 5, 10, 15, 20];
const result = filterGreaterThan(numbers, 10);
console.log(result);

//5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

function combineArrays(array1, array2) {
    return [...array1, ...array2];
    //return array1.concat(array2);
}

const arrayFirst = [1, 2, 3];
const arraySecond = [4, 5, 6];
const combine = combineArrays(arrayFirst, arraySecond);
console.log(combine);

//6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.

function getMaximum(array) {
    return Math.max(...array);
}
const max = getMaximum(numbers);
console.log(max);

//7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

function getMinimum(array) {
    return Math.min(...array);
}

const min = getMinimum(numbers);

//8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

function countTimesRepeated(array, number) {
    let counter = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] === number) {
            counter++;
        }
    }
    return counter;
}

let counter = countTimesRepeated(numbers, 15);
console.log(counter);

//9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

function removeDuplicates(array) {
    return [...new Set(array)];
}

const dublicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(dublicates);
console.log(uniqueNumbers);

//10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

function invertirArray(arr) {
    return arr.reverse();
}

console.log(invertirArray(numbers));





//Objetos literales:

//1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

function getName(obj) {
    return obj.name;
}

const person = {
    name: "Anna",
    age: 30
};
console.log(getName(person));

//2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

function updateAge(obj, newAge) {
    obj.age = newAge;
    return obj;
}

console.log(updateAge(person, 40));

//3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
function addProperty(obj, propName) {
    obj[propName] = null;
    return obj;
}

console.log(addProperty(person, "surname"));

//4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

function removeProperty(obj, propName) {
    delete obj[propName];
    return obj;
}

console.log(removeProperty(person, "surname"));

//5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

function countProperties(obj) {
    return Object.keys(obj).length;
}

console.log(countProperties(person));

//6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.

function hasProperty(obj, propName) {
    return obj.hasOwnProperty(propName);
}

console.log(hasProperty(person, "year"));
console.log(hasProperty(person, "name"));

//7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.

function getPropertyValues(obj) {
    return Object.values(obj);
}

console.log(getPropertyValues(person));

//8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.



//9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.

//10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.


