// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car (model, vurobnuk, year, max_speed, capacity_engine) {
//     this.model = model;
//     this.vurobnuk = vurobnuk;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.capacity_engine = capacity_engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.max_speed} кілометрів за годину`);
//     }
//     this.info = function () {
//     console.log(`Модель - ${this.model}, виробник - ${this.vurobnuk}, рік випуску ${this.year},
//     максимальна швидкість ${this.max_speed} кілометрів, обєм двигуна - ${this.capacity_engine}`)
//     }
//     this.increaseMaxSpeed = function (new_speed) {
//         this.max_speed = this.max_speed + new_speed;
//     }
//     this.changeYear = function (new_year) {
//     this.year = new_year;
//     }
//     this.capen = function (new_capacity_engine) {
//         this.capacity_engine = new_capacity_engine;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// let add_car = new car('Audi', 'Germany', 2015, 275, 4.2);
// console.log(add_car);
// add_car.drive();
// add_car.info();
// add_car.increaseMaxSpeed(35);
// add_car.drive();
// add_car.changeYear(2019);
// add_car.capen(5.6);
// add_car.info();
// add_car.addDriver('Oleh');
// console.log(add_car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// class car {
//     constructor (model, vurobnuk, year, max_speed, capacity_engine) {
//         this.model = model;
//         this.vurobnuk = vurobnuk;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.capacity_engine = capacity_engine;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.max_speed} кілометрів за годину`);
//     }
//     info () {
//         console.log(`Модель - ${this.model}, виробник - ${this.vurobnuk}, рік випуску ${this.year},
//     максимальна швидкість ${this.max_speed} кілометрів, обєм двигуна - ${this.capacity_engine}`);
//     }
//     increaseMaxSpeed (new_speed) {
//         this.max_speed = this.max_speed + new_speed;
//     }
//     changeYear (new_year) {
//         this.year = new_year;
//     }
//     addcap (new_capacity_engine) {
//         this.capacity_engine = new_capacity_engine;
//     }
//
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let add_car = new car('Subaru', 'Japan', 2011, 235, 3.2);
// console.log(add_car);
// add_car.drive();
// add_car.info();
// add_car.increaseMaxSpeed(65);
// add_car.drive();
// add_car.changeYear(2020);
// add_car.addcap(4.5);
// add_car.info();
// add_car.addDriver('Oleh');
// console.log(add_car);



// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

//
// function popelushka (name, age, size_leg) {
//     this.name = name;
//     this.age = age;
//     this.size_leg = size_leg;
// }
// let sultana = [
//     new popelushka('Meri', 24, 38),
//     new popelushka('Olya', 20, 36),
//     new popelushka('Yana', 21, 35),
//     new popelushka('Natali', 34, 39),
//     new popelushka('Katya', 19, 42),
//     new popelushka('Masha', 26, 45),
//     new popelushka('Cleo', 29, 42),
//     new popelushka('Nika', 25, 41),
//     new popelushka('Milana', 27, 34),
//     new popelushka('Oksana', 30, 37)
//
// ]
// console.log(sultana);
//
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class prince {
//       constructor(name, age, tufelka) {
//         this.name = name;
//         this.age = age;
//         this.tufelka = tufelka;
//     }
// }
// let sultan = new prince('Mustafa', 35, 34);
//
//
// // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
//
// let Roksolana = (sultana, sultan) => {
//     for (const sultanaElement of sultana) {
//         if (sultanaElement.size_leg === sultan.tufelka) {
//             return `імя попелюшки ${sultanaElement.name}`;
//         }
//     }
// }
// console.log(Roksolana(sultana,sultan));
//
//
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// let roksi = sultana.find((item) => item.size_leg === sultan.tufelka);
// console.log(roksi);


