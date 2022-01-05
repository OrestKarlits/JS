let post_url = new URL(location.href);
let post_id = post_url.searchParams.get('userId');
fetch('https://jsonplaceholder.typicode.com/users/posts' + post_id)
.then((getpost) => {
    return getpost.json()
})
.then((post_full) => {
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
    document.body.appendChild(post_wrap);
})