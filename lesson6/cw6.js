// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// Нерозумію цього завдання(((


// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let massive = (massive_length, number) => {
//     let empty_massive = [];
//     for (let i = 0; i < massive_length; i++) {
//     empty_massive.push(Math.round(Math.random() * number));
//     }
//     return empty_massive;
// }
// console.log(massive(15, 100));


// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


// let massive = (massive_length, number) => {
//     let empty_massive = [];
//     for (let i = 0; i < massive_length; i++) {
//     empty_massive.push(Math.round(Math.random() * number));
//     }
//     return empty_massive.sort((start, end) => start - end);
// }
// console.log(massive(15, 100));


// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа


// let massive = (massive_length, number) => {
//     let empty_massive = [];
//     for (let i = 0; i < massive_length; i++) {
//     empty_massive.push(Math.round(Math.random() * number));
//     }
//     return empty_massive.sort((start, end) => start - end).filter(item => item % 2 === 0);
// }
// console.log(massive(15, 100));


// створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


// let massive = (massive_length, number) => {
//     let empty_massive = [];
//     for (let i = 0; i < massive_length; i++) {
//     empty_massive.push(Math.round(Math.random() * number));
//     }
//     return empty_massive.sort((start, end) => start - end).filter(item => item % 2 === 0).map(str => str.toString());
// }
// console.log(massive(15, 100));


// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (massive, direction) => {
//     if (direction === 'ascending')
//         return massive.sort((start, end) => start - end);
//     if (direction === 'descending')
//         return massive.sort((start, end) => end - start);
// }
// console.log(sortNums([1, 45, -8, 96, 74, -121, 452, -741, 789, -632], 'ascending'));
// console.log(sortNums([1, 45, -8, 96, 74, -121, 452, -741, 789, -632], 'descending'));


// є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let duration = coursesAndDurationArray.sort((start, end) => end.monthDuration - start.monthDuration);
// console.log(duration);


// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let duration = coursesAndDurationArray.filter((item) => {return item.monthDuration > 5})
//     // .sort((star, en) => en.duration - star.duration);  // як зробити щоб воно вже від відфільтрованого списку сортування зробило від більшого до
//     // меншого пробував таким чином не вийшло(((.
// console.log(duration);




















