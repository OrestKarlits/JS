// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// function three_number (number1, number2, number3){
//     if (number1 < number2 && number1 < number3){
//         document.write(number1);
//     }
//     else if (number2 < number1 && number2 < number3){
//         document.write(number2);
//     }
//     else if (number3 < number1 && number3 < number2){
//         document.write(number3);
//     }
//     else {
//         document.write('Введені числа Не існують!!! Перевірте і спробуйте ще раз');
//     }
// }
// three_number(69,456, 236);


// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// function three_number (number1, number2, number3){
//     if (number1 > number2 && number1 > number3){
//         document.write(number1);
//     }
//     else if (number2 > number1 && number2 > number3){
//         document.write(number2);
//     }
//     else if (number3 > number1 && number3 > number2){
//         document.write(number3);
//     }
//     else {
//         document.write('Введені числа Не існують!!! Перевірте і спробуйте ще раз');
//     }
// }
// three_number(69,456, 236);


// створити функцію яка повертає найбільше число з масиву

// let max_number = [12355555, 12, 52, 654, 852, 159, 357, 684, 24685, 78963, 14789,951236];
// function number (max){
//     let array = max[0];
//     for (let item of max) {
//         if (item > array){
//             array = item;
//         }
//     }
//     return array;
// }
// document.write(number(max_number));


// створити функцію яка повертає найменьше число з масиву


// let max_number = [12355555, 12, 52, 654, 852, 159, 357, 684, 24685, 78963, 14789,951236];
// function number (max){
//     let array = max[0];
//     for (let item of max) {
//         if (item < array){
//             array = item;
//         }
//     }
//     return array;
// }
// document.write(number(max_number));


// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let massiv = [10, -20, 30, 100, -500, 100500, -369, -9631, -83454];
// function summassiv (summa){
//    let summaresult = 0;
//     for (const summaElement of summa) {
//     summaresult = summaresult + summaElement;
//     }
//     return summaresult;
// }
// document.write(summassiv(massiv));


// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// let massiv = [10, -20, 30, 100, -500, 100500, -369, -9631, -83454];
// function summassiv (summa){
//    let summaresult = 0;
//     for (const summaElement of summa) {
//     summaresult = summaresult + summaElement;
//     }
//     return summaresult / massiv.length;
// }
// document.write(summassiv(massiv));


// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function maxminnums (item) {
//     let minnum = item[0];
//     let maxnum = item[0];
//     for (const itemElement of item) {
//         if (itemElement > maxnum){
//             maxnum = itemElement;           //підкажіть що не так? видає ось таку помилку cw4.js:106 Uncaught TypeError: item is not iterable
//                                             // at maxminnums (cw4.js:106) at cw4.js:119, дивився на розязок завдань і чисто спробував  коли в 104, 105, 106 рядку
//                                             // замість item ставлю arguments тоді все працює, але я про змінну arguments нічого не писав
//         }
//         if (itemElement < minnum) {
//             minnum = itemElement;
//         }
//     }
//     console.log(maxnum);
//     return minnum;
// }
// document.write(maxminnums(123, 1, 852, 951, -63, 14456, -89, 69));


// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// function randomi (arrey) {
//     let masiv = [];
//     for (let i = 0; i < arrey; i++) {
//         masiv.push(Math.round(Math.random() * 100));
//     }
//     return masiv
// }
// document.write(randomi(10))



// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// function randomi (arrey, limit) {
//     let masiv = [];
//     for (let i = 0; i < arrey; i++) {
//         masiv.push(Math.round(Math.random() * limit));
//     }
//     return masiv
// }
// document.write(randomi(10, 50))


// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// function reverse(arr) {
//     let newArr = [5, 7, 10];
//     for (let i = newArr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = newArr[i];
//     }
//     return newArr;
// }
// document.write(reverse());

// Це завдання теж не зрозумів дивився на розвязок завдань на гіті в розділі resolve і там як на мене помилка тоді переглядав
// відповіді від Сергія дойшов до такого і чомусь згіднр 154 рядка в мене мало б виводитись 10, 7, 5 а виводиться 10, 7, 10
// і коли дані з 156 рядка видалив то вивелось правильно 5, 7, 10