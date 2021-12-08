// створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться
// на консоль інформація з цих 2х форм.Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// let elementById = document.getElementById('bat');
// elementById.onclick = function () {
//     let one = document.forma1.one.value;
//     let two = document.forma1.two.value;
//     let three = document.forma2.three.value;
//     let four = document.forma2.four.value;
//     console.log(one, two, three, four);
// }

//
// Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// let form = document.forms['table'];
// form.onsubmit = function (defolt) {
// defolt.preventDefault();
// let columns = form.columns.value;
// let rows = form.rows.value;
// let text = form.text.value;
// let table = document.createElement('table');
// document.body.appendChild(table);
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//             td.innerText = text;
//         }
//         table.appendChild(tr);
//     }
// }


// Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


// let bed_words = ['Злодій', 'Знайдибіда', 'Йолоп', 'Мерзотник', 'Лайдак',
//     'Лайно', 'Наволоч', 'Непотріб', 'Покидьок', 'Погань', 'Шмаркач'];
// let perevirka = document.getElementById('perevirka');
// perevirka.onclick = function () {
//     let slovo = document.getElementById('slovo').value;
//     for (let bedWord of bed_words) {
//         if (bedWord === slovo) {
//             alert('Перевірку не пройдено');
//         }
//     }
// }



// Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// let bed_words = ['Злодій', 'Знайдибіда', 'Йолоп', 'Мерзотник', 'Лайдак',
//     'Лайно', 'Наволоч', 'Непотріб', 'Покидьок', 'Погань', 'Шмаркач'];
// let perevirka = document.getElementById('perevirka');
// perevirka.onclick = function () {
//     let slovo = document.getElementById('slovo').value;
//     for (let bedWord of bed_words) {
//         if (slovo.includes(bedWord)) {
//             alert('Перевірку не пройдено');
//         }
//     }
// }







