'use strict'
/* Создайте программу, которая выводит в консоль числа по нарастающей в диапазоне,
обозначенном пользователем при помощи prompt.
Примерный алгоритм
1. Введите первое число диапазона
2. Введите второе число диапазона
3. Вывод чисел в консоль
В случае, если диапазон чисел включает в себя менее пяти значений, у пользователя
повторно запрашиваются корректные данные.
В случае, если первое число диапазона больше второго, вывод чисел должен идти в
обратном порядке, т.е. от большего к меньшему. */






/* let firstNumberValue = +prompt('Enter your first number');
let secondNumberValue = +prompt('Enter your second number');
do {
    firstNumberValue = +prompt('Enter your first number');
    secondNumberValue = +prompt('Enter your second number');
} while (Math.abs(firstNumberValue - secondNumberValue) < 5);
for (let i = firstNumberValue; i <= secondNumberValue; i++) {
    if ((firstNumberValue - secondNumberValue) < 5) {

    }
    console.log(i)

};
for (let i = firstNumberValue; i >= secondNumberValue; i--) {
    console.log(i)
};
 */




let firstNumberValue = +prompt('Enter your first number');
let secondNumberValue = +prompt('Enter your second number');
if (Math.abs(firstNumberValue - secondNumberValue) < 5) {
    do {
        firstNumberValue = +prompt('Enter your first number');
        secondNumberValue = +prompt('Enter your second number');
    } while (Math.abs(firstNumberValue - secondNumberValue) < 5);
    for (let i = firstNumberValue; i <= secondNumberValue; i++) {
        console.log(i);
    };
    for (let i = firstNumberValue; i >= secondNumberValue; i--) {
        console.log(i);
    };
} else {
    for (let i = firstNumberValue; i <= secondNumberValue; i++) {
        console.log(i);
    };
    for (let i = firstNumberValue; i >= secondNumberValue; i--) {
        console.log(i);
    };
};

