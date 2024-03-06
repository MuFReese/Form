"use strict";
const firstName = document.getElementById('name');
const lastName = document.getElementById('lastName');
const number = document.getElementById('number');
const email = document.getElementById('email');
const buttonForm = document.getElementById('buttonForm');
let dataUser = {};
let data = [];
function getData(USER) {
    USER = {
        name: firstName.value,
        lastName: lastName.value,
        telefon: number.value,
        email: email.value
    };
    console.log(Object);
    data.push(USER);
}
buttonForm.onclick = function () {
    getData(dataUser);
    console.log(data);
};
