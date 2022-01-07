let post_url = new URL(location.href);
let post_id = post_url.searchParams.get('userId');
fetch('https://jsonplaceholder.typicode.com/posts/43')
.then((getpost) => {
    return getpost.json()
})
.then((post_full) => {
    let wrap_wrap = document.createElement('div');
    wrap_wrap.classList.add('wrap_wrap');
    let post_wrap = document.createElement('div');
    post_wrap.classList.add('post_wrap');
    let info_post = document.createElement('div');
    info_post.classList.add('info_post');
    info_post.innerHTML =
        `<h1>userId ---- ${post_full.userId}</h1>
    <h2>ID: ${post_full.id}</h2>
    <h3>title : ---- ${post_full.title}</h3>
    <h4>BODY : -------- ${post_full.body}</h4>`;
    post_wrap.appendChild(info_post);
    wrap_wrap.appendChild(post_wrap)
    document.body.appendChild(wrap_wrap);
    let htmlButtonElement = document.createElement('button');
    htmlButtonElement.classList.add('htmlButtonElement');
    htmlButtonElement.innerText = 'get comments';
    info_post.appendChild(htmlButtonElement);
    htmlButtonElement.onclick = function () {
        fetch('https://jsonplaceholder.typicode.com/posts/' + post_full.id + '/comments')
            .then((comentar) => {
                return comentar.json();
            })
            .then((get_comentar) => {
                for (let comentarElement of get_comentar) {
                    let get_iter_div = document.createElement('div');
                    get_iter_div.classList.add('get_iter_div');
                    get_iter_div.innerHTML =`
                    <h1>postId: ------ ${comentarElement.postId}</h1>
                    <h2>id------- ${comentarElement.id}</h2>
                    <h3>name: -- ${comentarElement.name}</h3>
                    <h4>email: - ${comentarElement.email}</h4>
                    <h5>body: ${comentarElement.body}</h5>`;
                    post_wrap.appendChild(get_iter_div);
                }
            })
        htmlButtonElement.disabled = true;
    }
})