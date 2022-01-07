let url = new URL(location.href);
let id = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then((get) => {
        return get.json();
    })
    .then((user) => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        let info_user = document.getElementsByClassName('info_user')[0];
        info_user.innerHTML = `
                      <h1>ID: ${user.id}</h1>
               <h2>Name: ${user.name}</h2>
                <h2>Username: ${user.username}</h2>
                <h2>Email: ${user.email}</h2>
                <h3>Street: ${user.address.street}</h3>
                <h3>Suite: ${user.address.suite}</h3>
                <h3>City: ${user.address.city}</h3>
                <h3>Zipcode: ${user.address.zipcode}</h3>
                <h3>Geo - lat: ${user.address.geo.lat}</h3>
                <h3>Geo - lng: ${user.address.geo.lng}</h3>
                <h3>Phone: -  ${user.phone}</h3>
                <h3>Website: -  ${user.website}</h3>
                <h3>Street: ${user.address.street}</h3>
                <h3>Company name: -  ${user.company.name}</h3>
                <h3>Company catchPhrase: -  ${user.company.catchPhrase}</h3>
                <h3>Company bs: -  ${user.company.bs}</h3>`;
                wrap.appendChild(info_user);
                document.body.appendChild(wrap);


                let btn = document.createElement('button');
                btn.classList.add('button');
                btn.innerText = 'Post of current user';
                info_user.appendChild(btn);
                btn.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then((get) => {
                        return get.json()
                    })
                    .then((posts) => {
                        for (let post of posts) {
                            let wrap_posts = document.createElement('div');
                            wrap_posts.classList.add('wrap_posts')
                            let posts = document.createElement('div');
                            posts.classList.add('posts_div');
                            posts.innerHTML =
                                `<h1>Name:---- ${post.title}</h1>`;
                            wrap_posts.appendChild(posts);
                            wrap.appendChild(wrap_posts);
                            let button_post = document.createElement('button');
                            button_post.classList.add('button_post');
                            button_post.innerText = 'post of current user full';
                            posts.appendChild(button_post);
                            button_post.onclick = function () {
                                location.href = './post-details.html?postid=' + post.id;
                            }
                        }
                    })
                    btn.disabled = true;
                }
    })
