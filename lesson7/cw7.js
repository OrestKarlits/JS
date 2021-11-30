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
// add_car.info();
// add_car.addDriver('Oleh');
// console.log(add_car);