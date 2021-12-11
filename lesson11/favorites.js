let favor = JSON.parse(localStorage.getItem('favor'));
console.log(favor)
for (let favorite of favor) {
    let div = document.createElement('div');
    div.innerText = JSON.stringify(favorite);
    document.body.appendChild(div);
}