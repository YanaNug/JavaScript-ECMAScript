// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    const obj = {
        increment: (number) => ++number,
        decrement: (number) => --number       
    }
    return obj;  
}
const newObj = createCounter();
console.log(newObj.increment(15));
console.log(newObj.decrement(15));


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.


const targetElement = document.getElementsByClassName('my-class')
console.log(targetElement[0]);

// пока не могу понять как именно нужно использовать рекурсию, не получается как бы не пробовала(буду пытаться еще)