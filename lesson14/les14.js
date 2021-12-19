// / Зробити свій розпорядок дня. // // У вас має бути більше
// 10 асинхронних дій з рандомними затримками.
// // Вам необхідно синхронізувати всі свої дії за допомогою промісів та
// // async await (Код має бути написаний окремо)
// // Затримка має бути НЕ в порядку зростання, а будь яка.
// // При тому ваші дії мають бути синхронізовані.
// // // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с
// // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

function wakeup(work_day) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (work_day) {
                resolve('Треба ставати')
            }
            reject('Спимо далі')
        }, 400)
    })
}

function breakfest(cooking) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (cooking) {
                resolve(`Снідаю ${cooking}`)
            }
        }, 600)
    })
}
function clothes () {
    return new Promise(resolve => {
        setTimeout(() => {
            if (clothes) {
             resolve('Вдягаюсь і йду на роботу')
            }
        }, 900)
    })
}

function work () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('працюю')
        }, 1700)
    })
}

function drink_tea () {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("п'ю чай")
        }, 350)
    })
}

function obid (obid) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve (`обідаю ${obid}`)
        }, 390)
    })
}

function go_home() {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve ('Йду додому')
        }, 1600)
    })
}

function shower() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Прийшовши з роботи йду в душ')
        }, 600)
    })
}
function dinner () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('Вечеряю');
        }, 350)
    })
}

function learn () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('вчу джава-скріпт');
        }, 820)
    })
}

function sleep (i_think) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve (`Лягаю спати ${i_think}`);
        },8300)
    })
}




wakeup(true)
.then(morning => {
    console.log(morning);
    return breakfest('Мюслі з медом');
})

.then(i_eat => {
console.log(i_eat);
    return clothes();
})

    .then(marafet => {
        console.log(marafet);
        return work();
    })

.then(go => {
    console.log(go);
    return drink_tea();
})

    .then(tea => {
        console.log(tea);
        return work();
    })

    .then(robota_do_obidy => {
        console.log(robota_do_obidy);
        return obid('Кашу з котлетою');
    })

    .then(xavchuk => {
        console.log(xavchuk);
        return work();
    })

    .then(robota_pisla_obidy => {
        console.log(robota_pisla_obidy);
        return go_home();
    })

    .then(tucducduc => {
        console.log(tucducduc);
        return shower();
    })
    .then(water => {
        console.log(water);
        return dinner();
    })

    .then(dineer => {
        console.log(dineer);
        return learn();
    })
    .then(learning => {
        console.log(learning);
        return sleep('і думаю я тупий, нашо я пішов в те Ойті')
    })

    .then(go_sleep => {
        console.log(go_sleep);
    })
.catch(reason => {
    console.log('Ех згоріла хата хай горить і сарай, все пропало', reason);
})