// Создать произвольный елемент с id = text.  Используя JavaScript,
//     сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


// let text = document.getElementById('text');
// let magic = document.getElementById('magic');
// magic.onclick = function () {
//     text.style.display = 'none';
// }
// let tex = document.getElementById('tex');
// let fg = document.getElementById('asd');
// fg.onclick = function () {
// tex.style.display = 'block';
// }


// Создайте кнопку, при клике на которую, она будет скрывать сама себя.


// let element = document.getElementById('cvb');
// let but = true;
// element.onclick = function () {
//     if (but){
//         let ul_on = document.getElementById('ul');
//         ul_on.style.display = 'none';
//     }
//     else {
//         let ul_of = document.getElementById('ul');
//         ul_of.style.display = 'block';
//     }
//     but = !but;
// }


// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити
// вік чи меньше він ніж 18, та повідомити про це користувача


// document.getElementById('button_test').onclick = function () {
//   let age = document.getElementById('age').value;
//     if (age < 18) {
//         alert('З одною дозою не пускаємо');
//         console.log('З одною дозою не пускаємо');
//     } else {
//         alert('Вітаємо у вас зелений сертифікат. Ласкаво просимо');
//         console.log('Вітаємо у вас зелений сертифікат. Ласкаво просимо');
//     }
// }


// Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function () {
//     this.classList.toggle('toggl');
// }


// Создать список комментариев , пример объекта коментария -
// {le : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let spusok = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem4', body: 'lorem ipsum dolo sit ameti'}
// ]
// for (let spusokElement of spusok) {
//     let spusok_div = document.createElement('div');
//     let spusok_h2 = document.createElement('h2');
//     spusok_h2.innerText = spusokElement.title;
//     let coment = document.createElement('div');
//     coment.classList.add('com');
//     coment.innerText = spusokElement.body;
//     let button = document.createElement('button');
//     button.innerText = 'comentar button';
//     button.onclick = function () {
//         coment.classList.toggle('new_spusok');
//     }
//
//
//     spusok_div.append(spusok_h2, coment, button);
//     document.body.appendChild(spusok_div);
// }

// підкажіть що не так хотів щоб вийшло як в Сергія на відео, щоб overflow
// працював повільно, html 24 рядок, js 67 рядок без нього все працює







