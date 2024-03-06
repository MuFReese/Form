const firstName: any = document.getElementById('name')
const lastName: any = document.getElementById('lastName')
const number: any = document.getElementById('number')
const email: any = document.getElementById('email')
const buttonForm: any = document.getElementById('buttonForm')

let dataUser:user = {
}
let data: any = []

interface user {
  name?: string
  lastName?: string
  telefon?: string
  email?: string
}

function getData(USER: user) {
  USER = {
    name: firstName.value,
    lastName: lastName.value,
    telefon: number.value,
    email: email.value
  }
  console.log(Object)
  data.push(USER)
}

buttonForm.onclick= function() {
  getData(dataUser)
  console.log(data)
}
