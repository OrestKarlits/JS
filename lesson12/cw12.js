// Отримати відповідь з цього ресурсу відповідь, та вивести
// в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться
//     в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
.then((get) => {
    return get.json();
})
.then((set) => {
    let div = document.createElement('div');
    div.classList.add('posts');
    for (let list of set) {
        let div_item = document.createElement('div');
        div_item.classList.add('item');
        div_item.innerHTML =
       ` <h2>userId: ${list.userId}</h2>
        <h3>id -  ${list.id}</h3>
        <h4>Title: ${list.title}</h4>
        <h5>Body: ${list.body}</h5>`
        document.body.appendChild(div);
        div.appendChild(div_item);
        let but = document.createElement('button');
        but.classList.add('bat');
        but.innerText = 'Показати коментарі'
        div_item.appendChild(but);
        but.onclick = (id) => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + list.id + '/comments')
                .then(get => get.json())
                .then(set => {
                    for (let comment of set) {
                        if (list.id === comment.postId) {
                            let div_Comment = document.createElement('div');
                            div_Comment.classList.add('div_Comment');
                            div_Comment.innerHTML =
                                        `<h2>ID: ${comment.id}</h2>
                                        <h3>Name: ${comment.name}</h3>
                                        <h4>Email: ${comment.email}</h4>
                                        <h5>Body: ${comment.body}</h5>
                                        `;
                            div_item.appendChild(div_Comment);
                        }
                    }
                })
    }

}
})


