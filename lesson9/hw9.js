// // Все робити за допомоги js.
//
// // - створити блок,
//
// let htmlDivElement = document.createElement('div');
//
// // - додати йому класи wrap, collapse, alpha, beta
//
// htmlDivElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
//
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// htmlDivElement.style.background = 'green';
// htmlDivElement.style.color = 'red';
// htmlDivElement.style.fontSize = '26px';
// htmlDivElement.innerText = 'Lorem ipsum dolor sit amet.'
//
// // - додати цей блок в body.
//
// document.body.appendChild(htmlDivElement);
//
// // - клонувати його повністю, та додати клон в body.
//
// let node = htmlDivElement.cloneNode(true);
// document.body.appendChild(node);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий
// для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let massive = ['Main','Products','About us','Contacts'];
// let class_menu = document.getElementsByClassName('menu')[0];
// for (let classMenu of massive) {
//     let xxx = document.createElement('li');
//     xxx.innerText = classMenu;
//     class_menu.appendChild(xxx);
// }


// Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про
// title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let add_div = document.createElement('div');
//     add_div.innerText = `${coursesAndDurationArrayElement.title} ${coursesAndDurationArrayElement.monthDuration}`;
//     document.body.appendChild(add_div);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити
// <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (let element of coursesAndDurationArray) {
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.classList.add('item');
//     let htmlHeadingElement = document.createElement("h1");
//     htmlDivElement.classList.add('heading');
//     let htmlParagraphElement = document.createElement('p');
//     htmlParagraphElement.classList.add('description');
//     htmlDivElement.appendChild(htmlHeadingElement);
//     htmlDivElement.appendChild(htmlParagraphElement);
//     document.body.appendChild(htmlDivElement);
//     htmlHeadingElement.innerText = element.title;
//     htmlParagraphElement.innerText = element.monthDuration;
//     htmlDivElement.style.display = 'flex';
//     htmlDivElement.style.justifyContent = 'space-evenly';
//     htmlDivElement.style.alignItems = 'center'
// }



















