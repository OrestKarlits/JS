// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.' +
// ' Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((asd) => {
//         return asd.json();
//     })
//     .then((qwe) => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         for (let wrapElement of qwe) {
//             let item = document.createElement('div');
//             item.classList.add('card');
//             item.innerHTML =
//             `<h2>userId ${wrapElement.userId}</h2>
//             <h3>ID: ${wrapElement.id}</h3>
//             <h4>Title: ${wrapElement.title}</h4>
//             <h5>Body: ${wrapElement.body}</h5>`;
//             document.body.appendChild(wrap);
//             wrap.appendChild(item);
//         }
//     })



// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then((google) => {
//         return google.json()
//         })
//     .then((pixel) => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         for (let telephone of pixel) {
//             let item = document.createElement('div');
//             item.classList.add('comment');
//             item.innerHTML =
//                 `<h2>post_id - ${telephone.postId}</h2>
//                 <h3>Id: ${telephone.id}</h3>
//                 <h4>Name: ${telephone.name}</h4>
//                 <h5>Email ${telephone.email}</h5>
//                 <h6>Body: ${telephone.body}</h6>`
//             document.body.appendChild(wrap);
//             wrap.appendChild(item);
//         }
//     })







