// 4) Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
    return str.split('').reverse().join('')
}
console.log(reverseStr('Ivan'));

// 1) Написать функцию deepCopy для глубокого копирования объектов. 
// В качестве ключей и значений объектов используются только сериализуемые данные 
// (частные случаи с ключами функциями, Map, Set и т.д игнорируем). 

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const obCopy = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        obCopy[key] = deepCopy(obj[key])
    }

    return obCopy
}

const ob = { a: 3, b: { c: 7 } };
const obCopy = deepCopy(ob);
console.log(ob);
console.log(obCopy);

obCopy.a = 10;
obCopy.b.c = 11;

console.log('ob: ', ob.a)
console.log('ob: ', ob.b.c)

console.log('obCopy: ', obCopy.a)
console.log('obCopy: ', obCopy.b.c)

// 2) Создать функцию selectFromInterval (arr, a, b) {...}
// принимает 3 параметра: arr, a, b
// arr - массив чисел
// a, b - целые числа

// Функция должна вернуть новый массив, который включает в себя элементы массива arr вошедшие в интервал (включительно) между  a и b 
// (или  b и a, в зависимости от того, что больше a или b). Возвращаемый массив должен быть отсортирован по возрастанию.

// если arr - не массив, то кидаем ошибку "first parameter must be an array!";
// если arr не полностью состоит из чисел (есть другие типы),  то кидаем ошибку "There are not only numbers in the array!";
// если a и/или b не целое число, то кидаем ошибку "incorrect input parameters!".

function selectFromInterval(arr, a, b) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter must be an array!')
    }

    if (!arr.every(item => typeof item === 'number')) {
        throw new Error('There are not only numbers in the array!')
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error('incorrect input parameters!')
    }

    const minNum = Math.min(a, b);
    const maxNum = Math.max(a, b);

    const filteredArr = arr.filter(item => item >= minNum && item <= maxNum);
    const sortedArr = filteredArr.sort((num1, num2) => num1 - num2);

    return sortedArr;
}

// const arr1 = selectFromInterval(7, 5, 9);
// const arr2 = selectFromInterval([4, 8, 11, '66', 94, 7, '32'], 11, 94);
// const arr3 = selectFromInterval([4, 8, 11, 66, 94, 7, 32], 11.5, 94);

const arr4 = selectFromInterval([4, 8, 11, 66, 94, 7, 32], 11, 66);
console.log(arr4)

const arr5 = selectFromInterval([4, 8, 11, 66, 94, 7, 32], 11, 66);
console.log(arr5)






