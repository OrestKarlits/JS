// Всі функції повинні бути описані стрілочним типом!!!!
//     1) створити функцію яка обчислює та повертає площу прямокутника висотою

// let fun = (z, x) => {
//     return z * x;
// }
// console.log(fun(100,500));


// 2) створити функцію яка обчислює та повертає площу кола

// let kolo = (radius) => {
//     return Math.PI * (radius ** 2)
// }
// console.log(kolo(25));



// 3) створити функцію яка обчислює та повертає площу циліндру

// let culinder = (radius, height) => {
//     return Math.PI * 2 * radius * height;
// }
// console.log(culinder(10, 25));


// 4) створити функцію яка приймає масив та виводить кожен його елемент

// let massive = [12, 'fghjk', 456, false, 12352, 852, 'dfghjk', true, '526521'];
// let array = (massive) => {
//     for (let i = 0; i < massive.length; i++) {
//         console.log(massive[i]);
//     }
// }
// array(massive);


// 5) створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraf = (paragrafText) => {
//     document.write(`<p>${paragrafText}</p>`);
// }
// paragraf('951453dfghjklx');



// 6) створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// 7) створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// ці завдання вирішив обєднати бо посуті це одне і те саме))). Завдання 6 можна було б реалізувати або три рази лі
// вивести або циклом і замість len поставити 3 і змінну len взагалі не треба було давати

// let spusok = (fun, len) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < len; i++) {
//         document.write(`<li>${fun}</li>`);
//     }
//     document.write(`</ul>`);
// }
// spusok('asdfghjkl',3);


// 8) створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let primitiv = [753, 'fghjkl', false, 8521, 7453, 'sacasdckmjkca', true, 7563, 69, 'asdfghjklwidow'];
// let fun = (mas) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < mas.length; i++) {
//         document.write(`<li>${mas[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// fun(primitiv);

// 9) створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// let masive = [{id: 100, name: 'Paul', age: 31}, {id: 200, name: 'Vasul', age: 51}, {id: 300, name: 'Natali', age: 48}];
// let functione = (list) => {
//     for (const listElement of list) {
//       document.write(`<div>${listElement.id} : ${listElement.name} - ${listElement.age}</div>`);
//     }
// }
// functione(masive);

