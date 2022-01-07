let start = document.getElementsByClassName('butt')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then((get) => {
        return get.json();
    })
    .then((users) => {
        for (let user of users) {
            let div = document.createElement('div');
            div.classList.add('div');
            div.innerHTML =
                `<h1>ID: ${user.id}</h1>
                  <h2>Name: ${user.name}</h2>`;
            let but = document.createElement('button');
            but.classList.add('button');
            but.innerText = 'deteils-full';
            but.onclick = function () {
                location.href='./user-details.html?id=' + user.id;
            }
            div.appendChild(but);
            start.append(div);
        }
    });