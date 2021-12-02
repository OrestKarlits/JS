// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// document.getElementById('main_header').classList.add('september-2021');


// b) робить шириниу елементу ul 400px

// let elementsByTagName = document.getElementsByTagName('ul');
// elementsByTagName[0].style.width = '400px';


// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsByClassName = document.getElementsByClassName("linkList");
// for (let elementsByClassNameElement of elementsByClassName) {
//  elementsByClassNameElement.style.width = '50%';
// }


// d) отримує текст який зберігається в елементі з класом listElement2


// let elementsByClassName = document.getElementsByClassName('listElement2');
// elementsByClassName[0].innerHTML = '<b>asjcbasjcna,scnakk</b>';


// e) отримує всі елементи li та змінює ім колір фону на сірий

// let elementsByTagName = document.getElementsByTagName('li');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.background = 'silver';
// }


// f) отримує всі елементи 'a' та додає їм клас anchor

// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.classList.add('anchor');
// }


// g) отримує всі елементи 'a' та у випадку,
//     якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     if (elementsByTagNameElement.innerText === 'link3') {
//         elementsByTagNameElement.style.fontSize = '40px';
//     }
// }

//
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementsByTagName = document.getElementsByTagName('a');
// for (let elementsByTagNameElement of elementsByTagName) {
//     let xxx = elementsByTagNameElement.innerText
//         elementsByTagNameElement.classList.add(`element_${xxx}`)
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let elementsByClassName = document.getElementsByClassName('sub-header');
// elementsByClassName[0].style.color = prompt('Введіть колір');
// elementsByClassName[1].style.color = prompt('Введіть колір');


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст
// елемнту = content 2 segment . Колір отримати з prompt()

// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (let elementsByClassNameElement of elementsByClassName) {
//     if (elementsByClassNameElement.innerText === 'content 2 segment') {
//         elementsByClassNameElement.style.color = prompt('Введіть колір');
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
//     Текст отримати з prompt()

// let elementsByClassName = document.getElementsByClassName('content_1');
// elementsByClassName[0].innerText = prompt('Введіть текст');



// l) отримати елементи p та змінити їм padding на 20px

// let elementsByTagName = document.getElementsByTagName('p');
// for (let elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.padding = '20px';
// }


// m) отримати елементи з класом text2 та змінити їм текст на
// назву групи (mon-year. Пример sep-2021)

// let elementsByClassName = document.getElementsByClassName('text2');
// elementsByClassName[0].innerText = 'mon-year. Пример sep-2021';
