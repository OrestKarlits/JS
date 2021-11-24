// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let fan = (a,b,c) =>{
//     if (a < b && a < c) {
//         console.log(a);
//     }
//     else if (b < a && b < c) {
//         console.log(b);
//     }
//     else if (c < a && c < b) {
//         console.log(c);
//     }
//     else {
//         console.log('Введені числа Не існують!!! Перевірте і спробуйте ще раз')
//     }
// }
// fan(100, 500, -1000);



// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let fan = (a,b,c) =>{
//     if (a > b && a > c) {
//         console.log(a);
//     }
//     else if (b > a && b > c) {
//         console.log(b);
//     }
//     else if (c > a && c > b) {
//         console.log(c);
//     }
//     else {
//         console.log('Введені числа Не існують!!! Перевірте і спробуйте ще раз')
//     }
// }
// fan(100, 500, -1000);


// створити функцію яка повертає найбільше число з масиву

// let maxmassive = [123, 235235, 5235, 532, 539, 5678, -5, 95, 85, -19, 69, -87, 96, -69];
//
// let fan = (massive) => {
//     let max = massive[0];
//     for (const max1 of massive) {
//         if (max1 > max){
//             max = max1;
//         }
//     }
//     return max;
// }
// console.log(fan(maxmassive));



// створити функцію яка повертає найменьше число з масиву

// let minmassive = [125, -45, 123, 951, -753, 9520, -8545632, 45212, 154, -153];
// let minfan = (fan) => {
//     let min = fan[0];
//     for (const minElement of fan) {
//         if (minElement < min){
//             min = minElement;
//         }
//     }
//     return min;
// }
// console.log(minfan(minmassive));



// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sumamassiv = [453, -12, 7865, -7563, -96, -123, 63, -69, 75];
// let summa = (mas) => {
//     let result = 0;
//     for (const ma of mas) {
//         result = result + ma;
//     }
//     return result;
// }
// console.log(summa(sumamassiv));


// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let sumamassiv = [453, -12, 7865, -7563, -96, -123, 63, -69, 75];
// let summa = (mas) => {
//     let result = 0;
//     for (const ma of mas) {
//         result = result + ma;
//     }
//     return result / sumamassiv.length;
// }
// console.log(summa(sumamassiv));


// створити функцію яка приймає будь-яку кількість чисел, повертає
// найменьше, а виводить найбільше (Math використовувати заборонено);

// let number = (...num) => {
//     let item1 = num[0];
//     let item2 = num[0];
//     for (const numElement of num) {
//     if (numElement > item1) {
//         item1 = numElement;
//     }
//     if (numElement < item2) {
//         item2 = numElement;
//     }
//     }
//     console.log(item1);
//     return item2;
// }
// document.write(number(1, 169, -456, 453, 952, 753, 14896, -753));



// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let fan = (len) => {
//     let massive = [];
//     for (let i = 0; i < len; i++) {
//         massive.push(Math.round(Math.random() * 100));
//     }
//     return massive;
// }
// document.write(fan(10));


// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// let fan = (len, limit) => {
//     let massive = [];
//     for (let i = 0; i < len; i++) {
//         massive.push(Math.round(Math.random() * limit));
//     }
//     return massive;
// }
// document.write(fan(10, 50));



// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let massive = [753, 789, 345678, -1234];

let xxx = (item) => {
    let fan = [];
    for (let i = item.length - 1, va = 0; i >= 0; i--, va++) {
    fan[va] = item[i];
    }
    return fan;
}
document.write(xxx(massive));












