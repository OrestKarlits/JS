// / Зробити свій розпорядок дня. // // У вас має бути більше
// 10 асинхронних дій з рандомними затримками.
// // Вам необхідно синхронізувати всі свої дії за допомогою промісів та
// // async await (Код має бути написаний окремо)
// // Затримка має бути НЕ в порядку зростання, а будь яка.
// // При тому ваші дії мають бути синхронізовані.
// // // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с
// // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


// ПРОМІСИ


    // function wakeup(work_day) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (work_day) {
    //                 resolve('Треба ставати');
    //             }
    //             reject('Спимо далі');
    //         }, 400);
    //     })
    // }
    //
    // function breakfest(cooking) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             if (cooking) {
    //                 resolve(`Снідаю ${cooking}`);
    //             }
    //         }, 600);
    //     })
    // }
    //
    // function clothes() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             if (clothes) {
    //                 resolve('Вдягаюсь і йду на роботу');
    //             }
    //         }, 900);
    //     })
    // }
    //
    // function work() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve('працюю');
    //         }, 1700);
    //     })
    // }
    //
    // function drink_tea() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve("п'ю чай");
    //         }, 350);
    //     })
    // }
    //
    // function obid(obid) {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(`обідаю ${obid}`);
    //         }, 390);
    //     })
    // }
    //
    // function go_home() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve('Йду додому');
    //         }, 1600);
    //     })
    // }
    //
    // function shower() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve('Прийшовши з роботи йду в душ');
    //         }, 600);
    //     })
    // }
    //
    // function dinner() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve('Вечеряю');
    //         }, 350);
    //     })
    // }
    //
    // function learn() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve('вчу джава-скріпт');
    //         }, 820);
    //     })
    // }
    //
    // function sleep(i_think) {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(`Лягаю спати ${i_think}`);
    //         }, 8300);
    //     })
    // }
    //
    //
    // wakeup(true)
    //     .then(morning => {
    //         console.log(morning);
    //         return breakfest('Мюслі з медом');
    //     })
    //
    //     .then(i_eat => {
    //         console.log(i_eat);
    //         return clothes();
    //     })
    //
    //     .then(marafet => {
    //         console.log(marafet);
    //         return work();
    //     })
    //
    //     .then(go => {
    //         console.log(go);
    //         return drink_tea();
    //     })
    //
    //     .then(tea => {
    //         console.log(tea);
    //         return work();
    //     })
    //
    //     .then(robota_do_obidy => {
    //         console.log(robota_do_obidy);
    //         return obid('Кашу з котлетою');
    //     })
    //
    //     .then(xavchuk => {
    //         console.log(xavchuk);
    //         return work();
    //     })
    //
    //     .then(robota_pisla_obidy => {
    //         console.log(robota_pisla_obidy);
    //         return go_home();
    //     })
    //
    //     .then(tucducduc => {
    //         console.log(tucducduc);
    //         return shower();
    //     })
    //     .then(water => {
    //         console.log(water);
    //         return dinner();
    //     })
    //
    //     .then(dineer => {
    //         console.log(dineer);
    //         return learn();
    //     })
    //     .then(learning => {
    //         console.log(learning);
    //         return sleep('і думаю я тупий, нашо я пішов в те Ойті');
    //     })
    //
    //     .then(go_sleep => {
    //         console.log(go_sleep);
    //     })
    //     .catch(reason => {
    //         console.log('Ех згоріла хата хай горить і сарай, все пропало', reason);
    //     })



// КОЛБЕКИ


// function wakeup(work_day, info) {
//         setTimeout(() => {
//             if (work_day) {
//                  info(null,'Треба ставати');
//                  return;
//             }
//             info('Ще посплю');
//         }, 200);
// }
//
//
// function breakfest(cooking, eat) {
//         setTimeout(() => {
//             if (cooking) {
//              eat (null,`${cooking} мюслі з медом`);
//              return;
//             }
//             eat('Немає їжі')
//         }, 550);
// }
//
// function clothes(jeans, marafet) {
//     setTimeout( () => {
//         if (jeans) {
//             marafet(null, `${jeans} і йду на роботу`);
//             return;
//         }
//         marafet('сиджу вдома');
//     }, 450);
// }
//
// function work(robota, xxx) {
//     setTimeout(() => {
//         if (robota) {
//             xxx(null, 'Працюю');
//             return;
//         }
//         xxx('Не хочу працювати');
//     },500);
// }
//
// function tea(drink, tea) {
//     setTimeout(() => {
//         if (drink) {
//             tea(null, `п'ю ${drink}`);
//             return;
//         }
//         tea('Чаю не має');
//     }, 250);
// }
//
// function obid(go, obid) {
//     setTimeout(() => {
//         if (go) {
//             obid(null, `Обідаю ${go} з котлетою`);
//             return;
//         }
//         obid('Забув їжу вдома. Буду худати(((');
//     },555);
// }
//
// function go_home (home, gogo) {
//     setTimeout(() => {
//         if (home) {
//             gogo(null, `Йду ${home}`);
//             return;
//         }
//         gogo('буду ще працювати')
//     }, 600);
// }
//
// function shover (go_to_shover, wash) {
//     setTimeout(() => {
//         if (go_to_shover) {
//             wash(null,`${go_to_shover} в душ`);
//             return;
//         }
//     }, 390);
// }
//
// function dinner(omnomnom, vecherya) {
//     setTimeout(() => {
//         if (omnomnom) {
//             vecherya(null, `${omnomnom} кашу з сосисками`);
//             return;
//         }
//         vecherya('Я не голодний');
//     }, 510);
// }
//
// function learn(elf, js) {
//     setTimeout(() => {
//         if (elf) {
//             js(null, `${elf} javascript`);
//             return;
//         }
//         js('нашо во мені здалось?');
//     }, 462);
// }
//
// function sleep(go_sleep, sleeping) {
//     setTimeout(() => {
//         if (go_sleep) {
//             sleeping(null, 'Лягаю спати');
//             return;
//         }
//         sleeping('Сон для слабаків');
//     }, 3333);
// }
//
//
//
//
//
//
// wakeup( true,(start, good_morning) => {
//     if (start) {
//         console.log(start);
//         return;
//     }
//     console.log(good_morning);
//
//
//     breakfest('Снідаю',(go, eating) => {
//         if (go) {
//             console.log(go);
//             return;
//         }
//         console.log(eating);
//
//
//         clothes( 'Вдягаюсь',(go, clothe) => {
//             if (go) {
//                 console.log(go);
//                 return;
//             }
//             console.log(clothe);
//
//
//             work('work', (gg, roba) => {
//                 if (gg) {
//                     console.error(gg);
//                     return;
//                 }
//                 console.log('Початок роботи');
//
//
//                 tea('чай', (drink, drenk) => {
//                     if (drink) {
//                         console.log(drink);
//                         return;
//                     }
//                     console.log(drenk);
//
//
//                     work('work', (gg, roba) => {
//                         if (gg) {
//                             console.error(gg);
//                             return;
//                         }
//                         console.log(roba, 'до обіду');
//
//
//                         obid('картоплю', (eat, aet) => {
//                             if (eat) {
//                                 console.log(eat);
//                                 return;
//                             }
//                             console.log(aet);
//
//
//                             work('work', (gg, roba) => {
//                                 if (gg) {
//                                     console.error(gg);
//                                     return;
//                                 }
//                                 console.log(roba, 'після обіду');
//
//
//                                 tea('чай', (drink, drenk) => {
//                                     if (drink) {
//                                         console.log(drink);
//                                         return;
//                                     }
//                                     console.log(drenk);
//
//
//                                     go_home('додому', (over, home) => {
//                                         if (over) {
//                                             console.log(over);
//                                         }
//                                         console.log(home);
//
//
//                                         shover('Йду', (no_water, water) => {
//                                             if (no_water) {
//                                                 console.log(no_water);
//                                             }
//                                             console.log(water);
//
//
//                                             dinner('Вечеряю', (no_dinner, smachno) => {
//                                                 if (no_dinner) {
//                                                     console.log(no_dinner);
//                                                 }
//                                                 console.log(smachno);
//
//
//                                                 learn('Вчу', (no_learning, learning) => {
//                                                     if (no_learning) {
//                                                         console.error(no_learning);
//                                                     }
//                                                     console.log(learning);
//
//
//                                                     sleep('go_sleep', (no_sleeep, sleeep) => {
//                                                         if (no_sleeep){
//                                                         console.log(no_sleeep);
//                                                         }
//                                                         console.log(sleeep);
//                                                     })
//                                                 })
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


// async await

function wakeup(work_day) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (work_day) {
                resolve('Треба ставати');
            }
            reject('Спимо далі');
        }, 400);
    })
}

function breakfest(cooking) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (cooking) {
                resolve('Снідаю');
            }
        }, 600);
    })
}

function clothes() {
    return new Promise(resolve => {
        setTimeout(() => {
            if (clothes) {
                resolve('Вдягаюсь і йду на роботу');
            }
        }, 900);
    })
}

function work() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('працюю');
        }, 1700);
    })
}

function drink_tea() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("п'ю чай");
        }, 350);
    })
}

function obid(obid) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`обідаю`);
        }, 390);
    })
}

function go_home() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Йду додому');
        }, 1600);
    })
}

function shower() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Прийшовши з роботи і йду в душ');
        }, 600);
    })
}

function dinner() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Вечеряю');
        }, 350);
    })
}

function learn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('вчу джава-скріпт');
        }, 820);
    })
}

function sleep(i_think) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Лягаю спати`);
        }, 8300);
    })
}

async function get_info() {
    try {
        let start = await wakeup(true);
        console.log(start);
        let snidanok = await breakfest(start);
        console.log(snidanok);
        let clothe = await clothes(snidanok);
        console.log(clothe);
        let worked = await work(clothe);
        console.log(worked);
        let tea = await drink_tea(worked);
        console.log(tea);
        let eat = await obid(tea);
        console.log(eat);
        let home = await go_home(eat);
        console.log(home);
        let water = await shower(home);
        console.log(water);
        let vecherya = await dinner(water);
        console.log(vecherya);
        let js = await learn(vecherya);
        console.log(js);
        let sleeping = await sleep(js);
        console.log(sleeping);
    }
    catch (erora) {
        console.error(erora);
    }
}
get_info();