// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function User(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
// }
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// let users = [
//     new User(1,'Alastor', 'Moody', 'Alastor_Moody@gmail.com', 1111111111),
//     new User(1230,'Albus', 'Dumbledore', 'Albus_Dumbledore@gmail.com', 2222222222),
//     new User(170,'Bill', 'Weasley', 'Bill_Weasley@gmail.com', 3333333333),
//     new User(156,'Minerva', 'McGonagall', 'Minerva_McGonagall@gmail.com', 4444444444),
//     new User(69,'Cedric', 'Diggory', 'Cedric_Diggory@gmail.com', 5555555555),
//     new User(3,'Cho', 'Chang', 'Cho_Chang@gmail.com', 6666666666),
//     new User(25,'Neville', 'Longbottom', 'Neville_Longbottom@gmail.com', 7777777777),
//     new User(139,'Ron', 'Weasley', 'Ron_Weasley@gmail.com', 8888888888),
//     new User(32,'Hermione', 'Granger', 'Hermione_Granger@gmail.com', 9999999999),
//     new User(100,'Harry', 'Potter', 'Harry_Potter@gmail.com', 1234567890)
// ]
// console.log(users);
//
//
// // Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
//
// let filterusers = users.filter((sortid) =>{
//     if (sortid.id % 2 === 0)
//         return sortid;
// })
// console.log(filterusers);
//
//
// // Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let idsort = filterusers.sort((start, end) => start.id - end.id);
// console.log(idsort);
//
// // не розумію воно відсортувало, але з 35 рядка теж автоматично відсортувалось так як в 41 рядку




// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)



// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
//
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// let users = [
//     new Client(1,'Alastor', 'Moody', 'Alastor_Moody@gmail.com', 1111111111, ['sdfg', 'sdacfas', 'asap']),
//     new Client(1230,'Albus', 'Dumbledore', 'Albus_Dumbledore@gmail.com', 2222222222, ['sdfg']),
//     new Client(170,'Bill', 'Weasley', 'Bill_Weasley@gmail.com', 3333333333, ['sdfg', 'sdacfas', 'asap', 'sdftgh', 'asdasdasdcasc']),
//     new Client(156,'Minerva', 'McGonagall', 'Minerva_McGonagall@gmail.com', 4444444444, ['sdfg', 'sdacfas']),
//     new Client(69,'Cedric', 'Diggory', 'Cedric_Diggory@gmail.com', 5555555555, ['sdfg', 'sdacfas', 'asap', 'wertyu']),
//     new Client(3,'Cho', 'Chang', 'Cho_Chang@gmail.com', 6666666666, ['sdfg', 'sdacfas', 'asap', 'zxcvbn', 'qsdfgbhn', 'zxdftyui']),
//     new Client(25,'Neville', 'Longbottom', 'Neville_Longbottom@gmail.com', 7777777777, ['sdfg', 'sdacfas', 'asap', 'ahgash', 'o', 'z', 'u']),
//     new Client(139,'Ron', 'Weasley', 'Ron_Weasley@gmail.com', 8888888888, ['asdac','sjiajd', 'q','u','sdfg','qw', 'ty', 'ty', 'sdacfas', 'asap']),
//     new Client(32,'Hermione', 'Granger', 'Hermione_Granger@gmail.com', 9999999999, 'a', 'sa', 'sx', 'asac', 'dasw', 'as', 'adcc', 'aaca'),
//     new Client(100,'Harry', 'Potter', 'Harry_Potter@gmail.com', 1234567890, 'asc', 'aa', 'ac', 'assss', 'yu', 'pk', 'zxcvb', 'okm')
// ]
// console.log(users);
//
//
//
// // Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sortmasive = users.sort((start, end) => start.order.length - end.order.length)
// console.log(sortmasive);
//
//  // тут так само 74 рядок виводить по порядку як записано, 81 рядок виводить теж правильно від меншого до більшого але чого 74 автоматично стає так само відсортованим не розумію






