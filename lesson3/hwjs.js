// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [10, 69, 8, 47, 91];
// let str = ['asd', 'bcbc', 'asja', 'ashha', 'quu'];
// let xxx = ['agss', 25, true, 7, false]
// console.log(number);
// console.log(str);
// console.log(xxx);


// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let xxx = [];
// xxx[0] = true;
// xxx[1] = 123;
// xxx[2] = 'fsahaghsah';
// xxx[3] = false;
// xxx[4] = 3265464546;
// xxx[5] = 'asbachjabcabj';
// console.log(xxx);




// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


// for (let i = 0; i < 10; i++) {
//     document.write(`<div>adasd</div>`)
// }


// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} safasccaca</div>`)
// }



// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


// let xxx = 0;
// while (xxx<20) {
//     document.write(`<h1>sdasdasda</h1>`)
//     xxx++;
// }



// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині


// let xxx = 0;
// while (xxx<20) {
//     document.write(`<h1>sdasdasda ${xxx}</h1>`)
//     xxx++;
// }



// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.



// let xxx = [15, 41, 59, 14, 13, 16, 98, 45, 698, 79]
// for (let abc = 0; abc < xxx.length; abc++) {
//     console.log(xxx[abc])
// }


// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі

// let x = ['sahsg', 'joji', 'gcsagfxc', 'mskamal', 'oaksodka', 'lkasmoa', 'asaxa', 'fatfztFT', 'aysgxyasgyagx', 'asdahdbh']
// for (let sss = 0; sss < x.length; sss++) {
//     console.log(x[sss])
// }


// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.


// let p = [123, true, 'fsdsfsd', 566, 'qweqqqqqqqq', 456, false, 'fdksofksofk', 445, 'fasfafafcasfdvmd']
// for (let lll = 0; lll < p.length; lll++) {
//     console.log(p[lll])
// }



// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи



// let aaa = [true, 48, 'ajsnja', 456, 'qwertyu', false, 123, 'plkjnhv', 69, true]
// for (b = 0; b < aaa.length; b++) {
//     if (typeof aaa[b] === 'boolean') {
//         console.log(aaa[b])
//     }
// }




// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи




// let asd = [true, 121, 'sadasdas', 147, false, 'dsada', 85, true, 'vbnhjkl', 951, 'xcfghj', 753];
//  for (zxc = 0; zxc < asd.length; zxc++) {
//      if (typeof asd[zxc]=== 'number') {
//         console.log(asd[zxc]);
//      }
//  }





// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let vsjda = [true, 77878, 'dasda', false, 151456, 'qweuqiwu', 4546456, true, 'sdnjasnjsnajda', 165651];
// for (xxx = 0; xxx < vsjda.length; xxx++) {
//     if (typeof vsjda[xxx] === 'string') {
//        console.log(vsjda[xxx]);
//     }
// }



// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.



// let xxx = [];
// xxx[0] = 10;
// xxx[1] = true;
// xxx[2] = 'asdfa';
// xxx[3] = 123;
// xxx[4] = 'asadca';
// xxx[5] = false;
// xxx[6] = 852;
// xxx[7] = 'cdahsbjacn';
// xxx[8] = true;
// xxx[9] = 'lkjhgss';

// for (let zzz = 0; zzz < xxx.length; zzz++) {
//     console.log(xxx[zzz]);
// }



// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let fff = 0; fff < 10; fff++) {
//     console.log(fff);
//     document.write(fff + ' ');
// }



// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write



// for (let cvbn = 0; cvbn < 100; cvbn++) {
//     console.log(cvbn);
//     document.write(cvbn + " ");
// }




// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write



// for (let ghjk = 0; ghjk < 100; ghjk+=2) {
//     console.log(ghjk);
//   document.write(ghjk + " ");
// }


// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// перший варіант

// for (let bmmm = 0; bmmm < 100; bmmm++) {
//         if(bmmm % 2 === 0){
//             console.log( bmmm + ' ');
//             document.write( bmmm + ' ');
//         }
//     }


// другий варіант

// for (let bmmm = 0; bmmm < 100; bmmm+=2) {
//             console.log( bmmm + ' ');
//             document.write( bmmm + ' ');
//         }


// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// // перший варіант

// for (let bmmm = 0; bmmm < 100; bmmm++) {
//         if(bmmm % 2 === 1){
//             console.log( bmmm + ' ');
//             document.write( bmmm + ' ');
//         }
//     }

// другий варіант

// for (let bmmm = 1; bmmm < 100; bmmm+=2) {
//             console.log( bmmm + ' ');
//             document.write( bmmm + ' ');
//         }


// незнаю як на практиці але як на мене другий варіант кращий і принаймі мені зрозуміліший запис