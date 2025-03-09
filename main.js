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


