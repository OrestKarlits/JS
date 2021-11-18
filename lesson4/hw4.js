// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б?

// function area(a, b) {
//     let result = a * b;
//     return result;
// }
// document.write(area(100, 500));


// створити функцію яка обчислює та повертає площу кола з радіусом r

// function area (radius){
//     let diametr = radius ** 2;
//     let circle = diametr * 3.14;
//     return circle;
// }
// document.write(area((15)));


// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function area (radius, height) {
//     let twop = 2 * 3.14;
//     let cilinder = radius * twop * height;
//     return cilinder;
// }
// document.write(area(100, 500));



// створити функцію яка приймає масив та виводить кожен його елемент

//  let list = [123, 'dfghjk', 46, 'nsknksm', true, 69, 'zxcvbnm', 56, 'dfghjkghjkl', false];
// function okten (list){
//     for (let xxx = 0; xxx < list.length; xxx++){
//         document.write(`<div>${list[xxx]}</div>`);
//     }
// }
// (okten(list));

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function createText(text) {
//     document.write(`<p>${text}</p>`)
// }
// createText('fghjshdkajsda');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий?
// function ulli(argument){
//     document.write(`<ul><li>${argument}</li><li>${argument}</li><li>${argument}</li></ul>`);
// }
// ulli('sjdhsajdhjasdhja');


// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulli(textli, stop) {
//     document.write(`<ul>`);
//     for (let start = 0; start < stop; start++){
//         document.write(`<li>${textli}</li>`);
//     }
//     document.write(`</ul>`);
// }
// ulli('asdfghjk', 3);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let massuv = ['asdad', false, 123, 'fghjkl', 456, false, 789];
// function fun(list) {
//     document.write(`<ul>`)
//     for (let start = 0; start < massuv.length; start++){
//         document.write(`<li>${list[start]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// fun(massuv);


// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let massuv = [{id: 100, name: 'ghjklsfsds', age: 100}, {id: 500, name: 'gggggggggggggggg', age: 500},
    {id: 100500, name: 'gggggggggggggggg', age: 100500}, {id: 500100, name: 'gggggggggggggggg', age: 500100}]
function funmas (list) {

}