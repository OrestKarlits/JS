// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


// let forma = document.forms.forma;
// forma.onsubmit = function (def) {
//     def.preventDefault();
//     let name = forma.name.value;
//     let age = forma.age.value;
//     console.log(name, age);
//     localStorage.setItem('key', JSON.stringify({name,age}));
// }


// створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


// let form = document.forms.car;
// form.onsubmit = function (def) {
//     def.preventDefault();
//     let model = this.model.value;
//     let type = this.type.value;
//     let volume = this.volume.value;
//     let mashina = {model, type, volume};
//     let xxx = JSON.parse(localStorage.getItem('cars'));
//     console.log(xxx);
//     if (!xxx){
//         xxx = [];
//         xxx.push(mashina);
//     }
//     else {
//         xxx.push(mashina);
//     }
//         localStorage.setItem('cars', JSON.stringify(xxx));
// }
