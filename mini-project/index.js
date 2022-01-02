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


            //     fetch('https://jsonplaceholder.typicode.com/users')
            //         .then((get) => {
            //             return get.json();
            //         })
            //         .then((users) => {
            //             for (let user_full of users) {
            //                 if (user.id === user_full.id) {
            //                     let htmlDivElement = document.createElement('div');
            //                     htmlDivElement.classList.add('htmlDivElement');
            //                 let div_full = document.createElement('div');
            //                 div_full.innerHTML =
            //                     `<h1>ID: ${user_full.id}</h1>
            //    <h2>Name: ${user_full.name}</h2>
            //     <h2>Username: ${user_full.username}</h2>
            //     <h2>Email: ${user_full.email}</h2>
            //     <h3>Street: ${user_full.address.street}</h3>
            //     <h3>Suite: ${user_full.address.suite}</h3>
            //     <h3>City: ${user_full.address.city}</h3>
            //     <h3>Zipcode: ${user_full.address.zipcode}</h3>
            //     <h3>Geo - lat: ${user_full.address.geo.lat}</h3>
            //     <h3>Geo - lng: ${user_full.address.geo.lng}</h3>
            //     <h3>Phone: -  ${user_full.phone}</h3>
            //     <h3>Website: -  ${user_full.website}</h3>
            //     <h3>Street: ${user_full.address.street}</h3>
            //     <h3>Company name: -  ${user_full.company.name}</h3>
            //     <h3>Company catchPhrase: -  ${user_full.company.catchPhrase}</h3>
            //     <h3>Company bs: -  ${user_full.company.bs}</h3>`;
            //                 div.appendChild(htmlDivElement);
            //                 htmlDivElement.appendChild(div_full);
            //                 }
            //             }
            //         })
            // but.disabled = true;
            }
            div.appendChild(but);
            start.append(div);
        }
    });