// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hello_world = 'hello world';
// hello_world = hello_world.length;
// console.log(hello_world);
//
// let lorem_ipsum = 'lorem ipsum';
// lorem_ipsum = lorem_ipsum.length;
// console.log(lorem_ipsum);
//
// let javascript_is_cool = 'javascript is cool';
// javascript_is_cool = javascript_is_cool.length;
// console.log(javascript_is_cool);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let hello_world = 'hello world';
// hello_world = hello_world.toUpperCase();
// console.log(hello_world);
//
// let lorem_ipsum = 'lorem ipsum';
// lorem_ipsum = lorem_ipsum.toUpperCase();
// console.log(lorem_ipsum);
//
// let javascript_is_cool = 'javascript is cool';
// javascript_is_cool = javascript_is_cool.toUpperCase();
// console.log(javascript_is_cool);

// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let hello_world = 'HELLO WORLD';
// hello_world = hello_world.toLowerCase();
// console.log(hello_world);
//
// let lorem_ipsum = 'LOREM IPSUM';
// lorem_ipsum = lorem_ipsum.toLowerCase();
// console.log(lorem_ipsum);
//
//
// let javascript_is_cool = 'JAVASCRIPT IS COOL';
// javascript_is_cool = javascript_is_cool.toLowerCase();
// console.log(javascript_is_cool);


// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// str = str.trim();
// console.log(str);


// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray = (str) => {
//     return str.split(" ");
// }
//
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr);

// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, num) => {
//     return str.substring(0, num)
// }
//
// let str = 'Каждый охотник желает знать';
// console.log(delete_characters(str, 14));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// let insert_dash = (dash) => {
//     return asd.split(' ').join('-').toUpperCase();
// }
// let asd = "HTML JavaScript PHP";
// console.log(insert_dash(asd));


// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let fan = (name_fan) => {
//     return name_fan[0].toUpperCase() + name_fan.slice(1);
// }
// console.log(fan('karlits'));


// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(aaa=>aaa.charAt(0).toUpperCase()+aaa.slice(1)).join(' ');
// };
// console.log(capitalize('karlits orest'));












